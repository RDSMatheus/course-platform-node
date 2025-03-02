import { Request } from 'express';
import cloudinary from '../utils/cloudinary';
import fs from 'fs';
import { Video } from '../models/video-model';

export class VideoRepository {
  async post(req: Request) {
    try {
      if (!req.file) {
        throw new Error('Nenhum arquivo enviado.');
      }
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'uploads',
        resource_type: 'video',
      });
      fs.unlinkSync(req.file.path);

      const video = new Video({ ...req.body, url: result.secure_url });
      await video.save();
    } catch (error) {
      console.error('Erro ao fazer upload do vídeo:', error);
      throw error;
    }
  }

  async get(page: number, limit: number): Promise<Video[]> {
    const video = (await Video.find().skip(page).limit(limit)) as Video[];
    return video;
  }

  async getById(id: string): Promise<Video> {
    const video = (await Video.findById(id)) as Video;
    return video;
  }

  async delete(id: string): Promise<void> {
    await Video.deleteOne({ _id: id });
  }

  async update(id: string, body: Video): Promise<Video> {
    const updateVideo = await Video.findByIdAndUpdate(id, body);
    if (!updateVideo) throw new Error('Video não encontrado');
    const updatedVideo = (await Video.findById(id)) as Video;
    return updatedVideo;
  }
}

import { Request } from 'express-serve-static-core';
import { VideoRepository } from '../repository/video-repository';
import { Video } from '../models/video-model';

export class VideoServices {
  private videoRepository: VideoRepository;
  constructor() {
    this.videoRepository = new VideoRepository();
  }

  async post(req: Request): Promise<void> {
    const { description, title } = req.body;
    if (!description || !title) {
      throw new Error('Preenca os dados corretamente.');
    }
    if (!req.file) {
      throw new Error('Envie o video.');
    }
    await this.videoRepository.post(req);
  }

  async get(page: number, pageSize: number): Promise<Video[]> {
    const skip = (page - 1) * pageSize;
    const pageSkip = skip || 1;
    const limit = pageSize || 10;
    const video = await this.videoRepository.get(pageSkip, limit);
    return video;
  }

  async getById(id: string): Promise<Video> {
    if (!id) throw new Error('Insira o id do video.');
    const video = await this.videoRepository.getById(id);
    return video;
  }

  async delete(id: string): Promise<void> {
    if (!id) throw new Error('Insira o id do video.');
    await this.videoRepository.delete(id);
  }

  async update(id: string, body: Video): Promise<Video> {
    if (!id) throw new Error('Insira o id do video.');
    return await this.videoRepository.update(id, body);
  }
}

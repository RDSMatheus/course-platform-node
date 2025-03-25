import {
  ModuleProgress,
  Progress,
  VideoProgress,
} from '../models/progress-model';
import { ProgressRepository } from '../repository/progress-repository';

export class ProgressServices {
  private _progressRepository: ProgressRepository;
  constructor() {
    this._progressRepository = new ProgressRepository();
  }

  async completeVideo(videoProgress: VideoProgress): Promise<Progress> {
    const { courseId, userId, videoId } = videoProgress;
    if (!courseId || !userId || !videoId) {
      throw new Error('Insira todos o valores.');
    }
    return await this._progressRepository.completeVideo(videoProgress);
  }

  async completeModule(moduleProgress: ModuleProgress): Promise<Progress> {
    const { courseId, moduleId, userId } = moduleProgress;
    if (!courseId || !userId || !moduleId) {
      throw new Error('Insira todos o valores.');
    }
    return await this._progressRepository.completeModule(moduleProgress);
  }

  async getProgress(courseId: string, userId: string) {
    if (!courseId || !userId) {
      throw new Error('Insira todos os valores.');
    }
    const progress = await this._progressRepository.getProgress(
      courseId,
      userId,
    );
    if (!progress) {
      throw new Error('Progresso não encontrado.');
    }
    return progress;
  }

  async getCourseProgress(courseId: string, userId: string): Promise<string> {
    if (!courseId || !userId) {
      throw new Error('Insira todos os valores.');
    }
    const progress = await this._progressRepository.getCourseProgress(
      courseId,
      userId,
    );
    if (!progress) {
      throw new Error('Progresso não encontrado.');
    }
    return progress;
  }

  async deleteProgress(userId: string, courseId: string): Promise<void> {
    if (!courseId || !userId) {
      throw new Error('Insira todos os valores.');
    }

    const progress = await this._progressRepository.getProgress(
      courseId,
      userId,
    );

    if (!progress) {
      throw new Error('Progresso não encontrado.');
    }

    await this._progressRepository.deleteProgress(userId, courseId);
  }
}

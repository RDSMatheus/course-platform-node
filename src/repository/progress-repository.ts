import { Course } from '../models/course-model';
import {
  ModuleProgress,
  Progress,
  VideoProgress,
} from '../models/progress-model';

export class ProgressRepository {
  async completeVideo(videoProgress: VideoProgress): Promise<Progress> {
    const { courseId, userId, videoId } = videoProgress;
    const progress = (await Progress.findOneAndUpdate(
      { user: userId, course: courseId },
      { $addToSet: { completedVideos: videoId } },
      { new: true, upsert: true },
    )) as Progress;
    return progress;
  }

  async completeModule(moduleProgress: ModuleProgress): Promise<Progress> {
    const { courseId, moduleId, userId } = moduleProgress;
    const progress = (await Progress.findOneAndUpdate(
      { user: userId, course: courseId },
      { $addToSet: { completedModule: moduleId } },
      { new: true, upsert: true },
    )) as Progress;
    return progress;
  }

  async getProgress(courseId: string, userId: string) {
    const progress = await Progress.findOne({ user: userId, course: courseId });

    if (
      progress &&
      progress.completedModule &&
      progress.completedModule.length > 0
    ) {
      await progress.populate('completedModule');
    }

    if (
      progress &&
      progress.completedVideos &&
      progress.completedVideos.length > 0
    ) {
      await progress.populate('completedVideos');
    }

    return progress;
  }

  async getCourseProgress(courseId: string, userId: string) {
    let progress = await Progress.findOne({ user: userId, course: courseId });
    const course = await Course.findById(courseId)
      .populate({
        path: 'modules',
        populate: { path: 'videos' },
      })
      .lean();

    const totalVideos = course?.modules.reduce(
      (acc, module: any) => acc + (module.videos.length || 0),
      0,
    );

    const completedVideos = progress?.completedVideos.length;

    let percentage = 0;
    if (completedVideos) {
      percentage = totalVideos ? (completedVideos / totalVideos) * 100 : 0;
    }
    return percentage.toFixed(2) + '%';
  }
}

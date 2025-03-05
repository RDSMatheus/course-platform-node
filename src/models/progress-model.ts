import mongoose, { Schema } from 'mongoose';

export type VideoProgress = {
  userId: string;
  courseId: string;
  videoId: string;
};

export type ModuleProgress = {
  userId: string;
  courseId: string;
  moduleId: string;
};

export type Progress = {
  user: string;
  course: string;
  completedModule: string[];
  completedVideos: string[];
  lastAccessedAt: Date;
};

const progressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  completedModule: [{ type: Schema.Types.ObjectId, ref: 'Module' }],
  completedVideos: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
  lastAccessedAt: { type: Date, default: Date.now },
});

export const Progress = mongoose.model('Progress', progressSchema);

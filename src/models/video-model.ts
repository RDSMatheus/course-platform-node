import mongoose, { Schema } from 'mongoose';

export type Video = {
  title: string;
  description: string;
  url: string;
};

const videoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
});

export const Video = mongoose.model('Video', videoSchema);

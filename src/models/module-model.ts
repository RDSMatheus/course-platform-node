import mongoose, { Schema } from 'mongoose';

export type Module = {
  title: string;
  description: string;
  videos: string[];
  introVideo: string;
};

const moduleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videos: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true },
  ],
  introVideo: { type: mongoose.Schema.Types.ObjectId, required: true },
});

export const Module = mongoose.model('Modulo', moduleSchema);

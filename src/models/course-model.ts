import mongoose, { Schema } from 'mongoose';

export type Course = {
  title: string;
  description: string;
  price: string;
  modules: string[];
  lifetime: boolean;
  premium: boolean;
};

const coursoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
    lifetime: { type: Boolean, default: false },
    premium: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Course = mongoose.model('Course', coursoSchema);

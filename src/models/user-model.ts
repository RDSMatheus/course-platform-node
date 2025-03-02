import mongoose from 'mongoose';
const { Schema } = mongoose;

export type User = {
  name: string;
  email: string;
  cpf: string;
  password: string;
  signUpDate: Date;
  premiumAccess: boolean;
  paidAccess: boolean;
};

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cpf: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    signUpDate: { type: Date, default: Date.now },
    premiumAccess: { type: Boolean, default: false },
    paidAccess: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const User = mongoose.model('User', userSchema);

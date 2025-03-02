import mongoose from 'mongoose';

export async function main() {
  await mongoose
    .connect('mongodb://127.0.0.1:27017/course-platform')
    .then(() => {
      console.log('Conectado ao MongoDB');
    })
    .catch((error) => {
      console.error('Erro ao conectar ao MongoDB', error);
    });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/course-platform');` if your database has auth enabled
}

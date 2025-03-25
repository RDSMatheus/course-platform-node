import mongoose from 'mongoose';

export async function main() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined');
    }
    await mongoose.connect(mongoUri, {
      heartbeatFrequencyMS: 15000, 
      localThresholdMS: 25, 
      retryWrites: true,
      w: 'majority',
      connectTimeoutMS: 60000,
      socketTimeoutMS: 60000, 
    });
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
  }
}

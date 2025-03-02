import { Module } from '../models/module-model';
import { ModuleRepository } from '../repository/module-repository';

export class ModuleServices {
  moduleRepository: ModuleRepository;
  constructor() {
    this.moduleRepository = new ModuleRepository();
  }
  async post(body: Module) {
    const { description, title, videos, introVideo } = body;
    if (!description || !title || !videos || !introVideo) {
      throw new Error('Preencha todos os dados.');
    }
    await this.moduleRepository.post(body);
  }

  async getById(id: string): Promise<Module> {
    if (!id) throw new Error('Insira um id.');
    return await this.moduleRepository.getById(id);
  }

  async get(): Promise<Module[] | Module> {
    return await this.moduleRepository.get();
  }

  async delete(id: string): Promise<void> {
    if (!id) throw new Error('Insira um id.');
    const module = await this.moduleRepository.delete(id);
    if (!module) throw new Error('Módulo inexistente.');
  }

  async update(id: string, body: Module): Promise<Module> {
    if (!id) throw new Error('Insira um id.');
    const [oldModule, newModule] = await this.moduleRepository.update(id, body);
    if (!oldModule) throw new Error('Módulo não encontrado.');
    return newModule;
  }
}

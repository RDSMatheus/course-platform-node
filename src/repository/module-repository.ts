import { Module } from '../models/module-model';

export class ModuleRepository {
  async post(body: Module) {
    try {
      const module = new Module(body);
      await module.save();
    } catch (error) {
      throw new Error('Erro ao salvar o módulo no servidor.');
    }
  }

  async getById(id: string): Promise<Module> {
    const module = (await Module.findById(id)) as Module;
    return module;
  }

  async get(): Promise<Module[] | Module> {
    const modules = (await Module.find()) as Module[];
    return modules;
  }

  async delete(id: string): Promise<Module> {
    const module = (await Module.findById(id)) as Module;
    await Module.deleteOne({ _id: id });
    return module;
  }

  async update(id: string, body: Module): Promise<Module[]> {
    const oldModule = (await Module.findById(id)) as Module;
    const updatedModule = (await Module.findByIdAndUpdate(id, body)) as Module;
    return [oldModule, updatedModule];
  }
}

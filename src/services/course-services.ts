import { Course } from '../models/course-model';
import { CourseRepository } from '../repository/course-respository';

export class CourseServices {
  courseRepository: CourseRepository;
  constructor() {
    this.courseRepository = new CourseRepository();
  }
  async post(body: Course): Promise<void> {
    const { description, modules, price, title } = body;
    if (!description || !modules || !price || !title) {
      throw new Error('Envie todos os dados.');
    }
    await this.courseRepository.post(body);
  }

  async get(): Promise<Course[]> {
    return await this.courseRepository.get();
  }

  async getById(id: string): Promise<Course> {
    if (!id) throw new Error('Envie um id válido');
    const course = await this.courseRepository.getById(id);
    if (!course) throw new Error('Não foi possivel encontrar o curso.');
    return course;
  }

  async delete(id: string): Promise<void> {
    if (!id) throw new Error('Envie um id válido.');
    const course = await this.courseRepository.delete(id);
    if (!course) throw new Error('Curso não encontrado.');
  }

  async update(id: string, body: Course): Promise<Course> {
    const [oldCourse, newCourse] = await this.courseRepository.update(id, body);
    if (!oldCourse) throw new Error('Curso não encontrado.');
    return newCourse;
  }
}

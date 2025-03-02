import { Course } from '../models/course-model';

export class CourseRepository {
  async post(body: Course): Promise<void> {
    try {
      const course = new Course(body);
      await course.save();
    } catch (error) {
      throw new Error('Erro ao tentar criar curso.');
    }
  }

  async get(): Promise<Course[]> {
    return await Course.find();
  }

  async getById(id: string): Promise<Course> {
    const course = (await Course.findById(id)) as Course;
    return course;
  }

  async delete(id: string): Promise<Course | null> {
    await Course.findByIdAndDelete(id);
    return (await Course.findById(id)) as Course;
  }

  async update(id: string, body: Course): Promise<Course[]> {
    const oldCourse = (await Course.findById(id)) as Course;
    const updatedCourse = (await Course.findByIdAndUpdate(id, body)) as Course;
    return [oldCourse, updatedCourse];
  }
}

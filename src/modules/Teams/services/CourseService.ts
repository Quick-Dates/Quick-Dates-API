import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import { ICourse } from '../interfaces/ICourse';
import ICourseRepository from '../interfaces/ICourseRepository';
import Courses from '../models/Courses';

@injectable()
class CourseService {
  constructor(
    @inject('CourseRepository')
    private courseRepository: ICourseRepository,
  ) {}

  async create({name, level}: ICourse): Promise<Courses> {
    const course = await this.courseRepository.create({
      level,
      name,
    });

    return course
  }

  async index(): Promise<Courses[]> {
    const cousers = await this.courseRepository.findAll();

    return cousers
  }

  async indexById({id}: any): Promise<Courses> {
    const course = await this.courseRepository.findById(id);

    if(!course) {
      throw new AppError('Curso não encontrado' , 404);
    }

    return course
  }
}

export default CourseService;

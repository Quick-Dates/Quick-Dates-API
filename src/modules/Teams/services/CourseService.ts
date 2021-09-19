import { getRepository } from 'typeorm';
import { ICourse } from '../interfaces/ICourse';
import Courses from '../models/Courses';

class CourseService {
  async create({name, level}: ICourse): Promise<Courses> {
    const courseRepository = getRepository(Courses);

    const course = courseRepository.create({
      level,
      name,
    });

    await courseRepository.save(course)

    return course
  }

  async index(): Promise<Courses[]> {
    const courseRepository = getRepository(Courses);


    const cousers = await courseRepository.find();

    return cousers
  }

  async indexById({id}: any): Promise<Courses | undefined> {
    const courseRepository = getRepository(Courses);


    const course = await courseRepository.findOne({where: {id}});

    return course
  }
}

export default CourseService;

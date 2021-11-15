import { getRepository, Repository } from "typeorm";
import ICourseRepository from "../interfaces/ICourseRepository";
import Courses from "../models/Courses";

export default class CourseRepository implements ICourseRepository {
  private ormRepository: Repository<Courses>;
  constructor() {
    this.ormRepository = getRepository(Courses);
  }
  async create(course: Courses): Promise<Courses> {
    const courseCreated = this.ormRepository.create(course);
    await this.ormRepository.save(course);
    return courseCreated;
  }

  async findById(id: number): Promise<Courses | undefined> {
    return await this.ormRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Courses[]> {
    return await this.ormRepository.find();
  }


}

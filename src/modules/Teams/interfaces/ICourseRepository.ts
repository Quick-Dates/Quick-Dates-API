import { LevelCourseEnum } from "../enum/LevelCourseEnum";
import { TypeCourseEnum } from "../enum/TypeCourseEnum";
import Courses from "../models/Courses";

export default interface ICourseRepository {
  findById(id: number): Promise<Courses | undefined>;
  findByNameAndLevel(name: TypeCourseEnum, level: LevelCourseEnum): Promise<Courses | undefined>;
  findAll(): Promise<Courses[]>;
  create(course: Courses): Promise<Courses>;
}

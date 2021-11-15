import Courses from "../models/Courses";

export default interface ICourseRepository {
  findById(id: number): Promise<Courses | undefined>;
  findAll(): Promise<Courses[]>;
  create(course: Courses): Promise<Courses>;
}

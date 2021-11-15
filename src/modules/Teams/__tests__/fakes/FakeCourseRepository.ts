import { LevelCourseEnum } from "../../enum/LevelCourseEnum";
import { TypeCourseEnum } from "../../enum/TypeCourseEnum";
import ICourseRepository from "../../interfaces/ICourseRepository";
import Courses from "../../models/Courses";

export default class FakeCourseRepository implements ICourseRepository {
  private courses: Courses[] = [];

  findById(id: number): Promise<Courses | undefined> {
    return new Promise((resolve) => {
      const course = this.courses.find(course => course.id === id);
      resolve(course);
    });
  }

  findAll(): Promise<Courses[]> {
    return new Promise((resolve) => {
      resolve(this.courses);
    });

  }
  create(course: Courses): Promise<Courses> {
    return new Promise((resolve) => {
      this.courses.push(course);
      resolve(course);
    });
  }

  findByNameAndLevel(name: TypeCourseEnum, level: LevelCourseEnum): Promise<Courses | undefined> {
    return new Promise((resolve) => {
      const course = this.courses.find(course => course.name === name && course.level === level);
      resolve(course);
    });
  }

}

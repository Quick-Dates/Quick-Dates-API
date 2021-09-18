import { LevelCourseEnum } from "../enum/LevelCourseEnum";
import { TypeCourseEnum } from "../enum/TypeCourseEnum";

export interface ICourse {
  id?: number;
  name: TypeCourseEnum;
  level: LevelCourseEnum;
}

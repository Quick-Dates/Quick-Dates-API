import { UpdateResult } from "typeorm";
import Students from "../models/Students";

export default interface IStudentRepository {
  findById(id: string): Promise<Students | undefined>;
  findBySuapId(suapId: number): Promise<Students | undefined>;
  update(id: string, student: Students): Promise<void>;
  create(student: Students): Promise<Students>;
}

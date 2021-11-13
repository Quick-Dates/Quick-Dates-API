import Teachers from "../models/Teachers";

export default interface ITeacherRepository {
  findById(id: string): Promise<Teachers | undefined>;
  findBySuapId(suapId: number): Promise<Teachers | undefined>;
  update(id: string, teacher: Teachers): Promise<void>;
  create(teacher: Teachers): Promise<Teachers>;
}

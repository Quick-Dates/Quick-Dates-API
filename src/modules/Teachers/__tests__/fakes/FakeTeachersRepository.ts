import ITeacherRepository from "../../interfaces/ITeacherRepository";
import Teachers from "../../models/Teachers";

export default class FakeTeachersRepository implements ITeacherRepository {
  private teachers: Teachers[] = [];

  findById(id: string): Promise<Teachers | undefined>{
    return new Promise((resolve) => {
      const teacher = this.teachers.find(teacher => teacher.id === id);
      resolve(teacher);
    });
  }
  findBySuapId(suapId: number): Promise<Teachers | undefined> {
    return new Promise((resolve) => {
      const teacher = this.teachers.find(teacher => teacher.suapId === suapId);
      resolve(teacher);
    });
  }
  update(id: string, teacher: Teachers): Promise<void> {
    return new Promise((resolve) => {
      const studentIndex = this.teachers.findIndex(
        teacher => teacher.id === id
      );
      this.teachers[studentIndex] = teacher;
      resolve();
    });
  }
  create(teacher: Teachers): Promise<Teachers>  {
    return new Promise((resolve) => {
      this.teachers.push(teacher);
      resolve(teacher);
    });
  }
}


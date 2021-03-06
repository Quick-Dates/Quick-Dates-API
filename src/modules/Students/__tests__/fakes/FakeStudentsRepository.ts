import IStudentRepository from "../../interfaces/IStudentRepository";
import Students from "../../models/Students";

export default class FakeStudentsRepository implements IStudentRepository {
  private students: Students[] = [];

  findById(id: string): Promise<Students | undefined>{
    return new Promise((resolve) => {
      const student = this.students.find(student => student.id === id);
      resolve(student);
    });
  }
  findBySuapId(suapId: number): Promise<Students | undefined> {
    return new Promise((resolve) => {
      const student = this.students.find(student => student.suapId === suapId);
      resolve(student);
    });
  }
  update(id: string, student: Students): Promise<void> {
    return new Promise((resolve) => {
      const studentIndex = this.students.findIndex(
        student => student.id === id
      );
      this.students[studentIndex] = student;
      resolve();
    });
  }
  create(student: Students): Promise<Students> {
    return new Promise((resolve) => {
      this.students.push(student);
      resolve(student);
    });
  }

  findAllByTeamId(teamId: number): Promise<Students[]> {
    return new Promise((resolve) => {
      const student = this.students.filter(student => student.id_team === teamId);
      resolve(student);
    });
  }
}


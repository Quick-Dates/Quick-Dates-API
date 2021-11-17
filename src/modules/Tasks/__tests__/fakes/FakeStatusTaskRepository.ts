import { IStatusTaskRepository } from "../../interfaces/IStatusTaskRepository";
import StatusTasks from "../../models/StatusTasks";

export default class FakeStatusTaskRepository implements IStatusTaskRepository {
  private statusTasks: StatusTasks[] = [];

  public async create(statusTask: StatusTasks): Promise<StatusTasks> {
    return new Promise(resolve => {
      this.statusTasks.push(statusTask);
      resolve(statusTask);
    })
  }

  public async update(id: number, statusTask: StatusTasks): Promise<StatusTasks> {
    return new Promise(resolve => {
      const index = this.statusTasks.findIndex(st => st.id === id);
      this.statusTasks[index] = statusTask;
      resolve(statusTask);
    })
  }

  public async findByIdStudentAndIdTask(idStudent: string, idTask: number): Promise<StatusTasks | undefined> {
    return new Promise(resolve => {
      const index = this.statusTasks.findIndex(st => st.id_student === idStudent && st.id_task === idTask);
      resolve(this.statusTasks[index]);
    })
  }

  public async findAllByIdStudent(idStudent: string): Promise<StatusTasks[]> {
    return new Promise(resolve => {
      const index = this.statusTasks.filter(st => st.id_student === idStudent);
      resolve(index);
    })
  }


}

import StatusTasks from "../models/StatusTasks";

export interface IStatusTaskRepository {
  create(statusTask: StatusTasks): Promise<StatusTasks>
  update(id: number, statusTask: StatusTasks): Promise<StatusTasks>
  findByIdStudentAndIdTask(idStudent: string, idTask: number): Promise<StatusTasks | undefined>
  findAllByIdStudent(idStudent: string): Promise<StatusTasks[]>
}

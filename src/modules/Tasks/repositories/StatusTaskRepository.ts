import { getRepository, Repository } from "typeorm";
import { IStatusTaskRepository } from "../interfaces/IStatusTaskRepository";
import StatusTasks from "../models/StatusTasks";

export default class StatusTaskRepository implements IStatusTaskRepository {
  private ormRepository: Repository<StatusTasks>;
  constructor() {
    this.ormRepository = getRepository(StatusTasks);
  }

  public async create(statusTask: StatusTasks): Promise<StatusTasks> {
    const newStatusTask =  this.ormRepository.create(statusTask);
    await this.ormRepository.save(newStatusTask);
    return newStatusTask;
  }

  public async update(id: number, statusTask: StatusTasks): Promise<StatusTasks> {
    await this.ormRepository.update(id, statusTask);
    return statusTask;
  }

  public async findByIdStudentAndIdTask(idStudent: string, idTask: number): Promise<StatusTasks | undefined> {
    return await this.ormRepository.findOne({ where: { id_student: idStudent, id_task: idTask } });
  }
  public async findAllByIdStudent(idStudent: string): Promise<StatusTasks[]> {
    return await this.ormRepository.find({ where: { id_student: idStudent } });
  }


}

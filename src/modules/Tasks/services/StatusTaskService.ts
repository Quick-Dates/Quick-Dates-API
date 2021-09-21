import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Students from "../../Students/models/Students";
import { SituationTaskEnum } from "../enuns/SituationTaskEnum";
import StatusTasks from "../models/StatusTasks";

class StatusTaskService {
  async create({ id_student, id_task }: any): Promise<StatusTasks> {
    const statusTaskRepository = getRepository(StatusTasks);

    const statusTask = statusTaskRepository.create({
      id_student,
      id_task,
      situation: SituationTaskEnum.EM_ANDAMENTO,
    });

    await statusTaskRepository.save(statusTask);
    return statusTask;
  }

  async indexByStudent(id_student: number): Promise<StatusTasks[]> {
    const statusTaskRepository = getRepository(StatusTasks);
    const studentRepository = getRepository(Students);
    const taskRepository = getRepository(StatusTasks);

    const student = await studentRepository.findOne({ where: { id: id_student } });

    if (!student) {
      throw new AppError("Aluno não encontrado", 404);
    }

    let statusTasks: any = await statusTaskRepository.find({
      where: { id_student },
    });

    statusTasks = statusTasks.map(async (statusTask: any) => {
      const task = await taskRepository.findOne({ where: { id: statusTask.id_task } });
      if (!task) {
        throw new AppError("Tarefa não encontrada", 404);
      }
      return { ...statusTask, task };
    })

    return statusTasks;
  }
}

export default StatusTaskService;

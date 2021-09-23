import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Students from "../../Students/models/Students";
import { SituationTaskEnum } from "../enuns/SituationTaskEnum";
import StatusTasks from "../models/StatusTasks";
import Tasks from "../models/Tasks";

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

  async indexTasksByStudent(id_student: string) {
    const statusTaskRepository = getRepository(StatusTasks);
    const studentRepository = getRepository(Students);
    const taskRepository = getRepository(Tasks);

    const student = await studentRepository.findOne({ where: { id: id_student } });

    if (!student) {
      throw new AppError("Aluno não encontrado", 404);
    }

    let statusTasks: any = await statusTaskRepository.find({
      where: { id_student },
    });

     statusTasks = await Promise.all(statusTasks.map(async (statusTask: any) => {
      const task = await taskRepository.findOne({ where: { id: statusTask.id_task } });
      if (!task) {
        throw new AppError("Tarefa não encontrada", 404);
      }
      if(statusTask.situation === SituationTaskEnum.EM_ANDAMENTO) {
        const finalDateTime = new Date(`${task.finalDate} ${task.finalTime}`);
        const currentDateTime = new Date();
        if(currentDateTime > finalDateTime) {
          statusTask.situation = SituationTaskEnum.ATRASADA;
          await statusTaskRepository.update(statusTask.id, statusTask);
        }
      }
      delete task.id_teacher;
      return { ...task };
    }))

    return statusTasks;
  }

  async indexSituation(id_task: number, id_student: string): Promise<StatusTasks> {
    const statusTaskRepository = getRepository(StatusTasks);
    const studentRepository = getRepository(Students);
    const taskRepository = getRepository(Tasks);

    const student = await studentRepository.findOne({ where: { id: id_student } });

    if (!student) {
      throw new AppError("Aluno não encontrado", 404);
    }

    const task = await taskRepository.findOne({ where: { id: id_task } });

    if(!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    let statusTask: any = await statusTaskRepository.findOne({
      where: { id_student, id_task },
    });

    if(!statusTask) {
      throw new AppError("Tarefa do aluno não encontrado", 404);
    }

    const finalDateTime = new Date(`${task.finalDate} ${task.finalTime}`);
    const currentDateTime = new Date();
    if(currentDateTime > finalDateTime && statusTask.situation === SituationTaskEnum.EM_ANDAMENTO) {
      statusTask.situation = SituationTaskEnum.ATRASADA;
      await statusTaskRepository.update(statusTask.id, statusTask);
    }

    return statusTask.situation;
  }

async updateSituation(id_task: number, id_student: string, completed: boolean): Promise<StatusTasks> {
    const statusTaskRepository = getRepository(StatusTasks);
    const studentRepository = getRepository(Students);
    const taskRepository = getRepository(Tasks);

    const student = await studentRepository.findOne({ where: { id: id_student } });

    if (!student) {
      throw new AppError("Aluno não encontrado", 404);
    }

    const task = await taskRepository.findOne({ where: { id: id_task } });

    if(!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    const statusTask: any = await statusTaskRepository.findOne({
      where: { id_student, id_task },
    });

    if(!statusTask) {
      throw new AppError("Tarefa do aluno não encontrado", 404);
    }
    const finalDateTime = new Date(`${task.finalDate} ${task.finalTime}`);
    const currentDateTime = new Date();

    if(completed) {
      statusTask.situation = SituationTaskEnum.CONCLUIDA;
    } else if(currentDateTime > finalDateTime) {
      statusTask.situation = SituationTaskEnum.ATRASADA;
    } else {
      statusTask.situation = SituationTaskEnum.EM_ANDAMENTO;
    }

    await statusTaskRepository.update(statusTask.id, statusTask);

    return statusTask;
  }
}

export default StatusTaskService;

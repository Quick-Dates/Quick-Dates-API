import { inject, injectable } from "tsyringe";
import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import NodeMailerService from "../../../shared/services/NodeMailerService";
import IStudentRepository from "../../Students/interfaces/IStudentRepository";
import Students from "../../Students/models/Students";
import Teachers from "../../Teachers/models/Teachers";
import { SituationTaskEnum } from "../enuns/SituationTaskEnum";
import { IParamsCreateStatusTask } from "../interfaces/IParams";
import { IStatusTaskRepository } from "../interfaces/IStatusTaskRepository";
import { ITaskRepository } from "../interfaces/ITaskRepository";
import StatusTasks from "../models/StatusTasks";
import Tasks from "../models/Tasks";

@injectable()
class StatusTaskService {
  constructor(
    @inject('StatusTaskRepository')
    private statusTaskRepository: IStatusTaskRepository,
    @inject('StudentRepository')
    private studentRepository: IStudentRepository,
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
    @inject('NodeMailerService')
    private nodeMailerService: NodeMailerService,
  ) {

  }
  async create({ id_student, id_task }: IParamsCreateStatusTask): Promise<StatusTasks> {
    const statusTask = await this.statusTaskRepository.create({
      id_student,
      id_task,
      situation: SituationTaskEnum.EM_ANDAMENTO,
    });

    return statusTask;
  }

  async createTasksByStudent(idStudent: string, tasks: Tasks[]): Promise<StatusTasks[]> {
    const createStatusTasks = async (task: Tasks) => {
      let statusTask = await this.statusTaskRepository.findByIdStudentAndIdTask(idStudent, task.id as number);
      if (!statusTask) {
        statusTask = await this.create({ id_student: idStudent, id_task: task.id as number });
      }
      return statusTask;
    }

    const getTasksCreated = tasks.map(createStatusTasks);

    const statusTasks = await Promise.all(getTasksCreated);

    return statusTasks;
  }

  async createTaskByStudents(students: Students[], task: Tasks, teacher: Teachers) {
    const createStatusTask = async (student: Students) => {
      await this.create({
        id_student: student.id as string,
        id_task: task.id as number
      });
      sendEmail(student)
    }
    const sendEmail = (student: Students) => setTimeout(async () => {
      await this.nodeMailerService.sendEmailTaskCreated(student, teacher, task);
    }, 3000)

    students.forEach(createStatusTask);
  }

  async indexTasksByStudent(id_student: string) {
    const student = await this.studentRepository.findById(id_student);

    if (!student) {
      throw new AppError("Aluno não encontrado", 404);
    }

    let statusTasks: any = await this.statusTaskRepository.findAllByIdStudent(id_student);

    const findByIdTask = async (statusTask: StatusTasks) => {
      const task = await this.taskRepository.findById(statusTask.id_task);
      if (!task) {
        throw new AppError("Tarefa não encontrada", 404);
      }
      return task;
    };

    const updateTaskSituation = async (statusTask: any, task: any) => {
      const isProgress = statusTask.situation === SituationTaskEnum.EM_ANDAMENTO;
      if (isProgress) {
        const finalDateTime = new Date(`${task.finalDate} ${task.finalTime}`);
        const currentDateTime = new Date();
        if (currentDateTime > finalDateTime) {
          statusTask.situation = SituationTaskEnum.ATRASADA;
          await this.statusTaskRepository.update(statusTask.id, statusTask);
        }
      }
    }

    const indexTasks = async (statusTask: any) => {
      const task = await findByIdTask(statusTask);
      updateTaskSituation(statusTask, task);
      delete task.id_teacher;
      return { ...task };
    }

    statusTasks = await Promise.all(statusTasks.map(indexTasks))

    return statusTasks;
  }

  async indexSituation(id_task: number, id_student: string): Promise<StatusTasks> {
    const student = await this.studentRepository.findById(id_student);

    if (!student) {
      throw new AppError("Aluno não encontrado", 404);
    }

    const task = await this.taskRepository.findById(id_task);

    if (!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    let statusTask: any = await this.statusTaskRepository.findByIdStudentAndIdTask(id_student, id_task);

    if (!statusTask) {
      throw new AppError("Tarefa do aluno não encontrado", 404);
    }

    const finalDateTime = new Date(`${task.finalDate} ${task.finalTime}`);
    const currentDateTime = new Date();
    const isAtrasada = currentDateTime > finalDateTime && statusTask.situation === SituationTaskEnum.EM_ANDAMENTO;
    if (isAtrasada) {
      statusTask.situation = SituationTaskEnum.ATRASADA;
      await this.statusTaskRepository.update(statusTask.id, statusTask);
    }

    return statusTask.situation;
  }

  async updateSituation(id_task: number, id_student: string, completed: boolean): Promise<StatusTasks> {
    const student = await this.studentRepository.findById(id_student);

    if (!student) {
      throw new AppError("Aluno não encontrado", 404);
    }

    const task = await this.taskRepository.findById(id_task);

    if (!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    const statusTask: any = await this.statusTaskRepository.findByIdStudentAndIdTask(id_student, id_task);

    if (!statusTask) {
      throw new AppError("Tarefa do aluno não encontrado", 404);
    }
    const finalDateTime = new Date(`${task.finalDate} ${task.finalTime}`);
    const currentDateTime = new Date();

    if (completed) {
      statusTask.situation = SituationTaskEnum.CONCLUIDA;
    } else if (currentDateTime > finalDateTime) {
      statusTask.situation = SituationTaskEnum.ATRASADA;
    } else {
      statusTask.situation = SituationTaskEnum.EM_ANDAMENTO;
    }

    await this.statusTaskRepository.update(statusTask.id, statusTask);

    return statusTask;
  }
}

export default StatusTaskService;

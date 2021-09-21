import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Teachers from "../../Teachers/models/Teachers";
import { ITask } from "../interfaces/ITask";
import Tasks from "../models/Tasks";

class TaskService {
  async create({ description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title, id_teacher }: ITask): Promise<Tasks> { //
    const taskRepository = getRepository(Tasks);
    const teacherRepository = getRepository(Teachers);

    const teacher = await teacherRepository.findOne({ where: { id: id_teacher } });

    if(!teacher) {
      throw new AppError('Professor não encontrado', 404);
    }

    if(maximumScore < 0 || maximumScore > 10) {
      throw new AppError("Pontuação máxima inválida", 400);
    }
    const task = taskRepository.create({
      description,
      finalDate,
      finalTime,
      maximumScore,
      startDate,
      startTime,
      subject,
      title,
      teacher: teacher,
      id_teacher: teacher.id
    });

    await taskRepository.save(task);

    return task;
  }

  async update(id: number, id_teacher:number,  taskData: Tasks): Promise<Tasks> {
    const taskRepository = getRepository(Tasks);
    const teacherRepository = getRepository(Teachers);

    const task = await taskRepository.findOne({ where: { id } });

    if(!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    const teacher = await teacherRepository.findOne({ where: { id: id_teacher } });
    if(!teacher) {
      throw new AppError("Professor não encontrado", 404);
    }

    if(teacher.id !== task.id_teacher) {
      throw new AppError("Você não tem permissão para alterar essa tarefa", 401);
    }

    if(taskData.maximumScore < 0 || taskData.maximumScore > 10) {
      throw new AppError("Pontuação máxima inválida", 400);
    }

    await taskRepository.update(id, taskData);
    return taskData
  }

  // async index(): Promise<Teams[]> {
  //   // get all
  // }

  // async getTaskByTeam(id_course: number): Promise<Teams[]> {
  //   // get by course
  // }

  // async indexById(id: number): Promise<Teams> {
  //   // get by id
  // }

  // async delete(id: number): Promise<Teams> {
  //   // delete
  // }


}

export default TaskService;

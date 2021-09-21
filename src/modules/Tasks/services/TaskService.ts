import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import { ITask } from "../interfaces/ITask";
import Tasks from "../models/Tasks";

class TaskService {
  async create({ description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title }: ITask): Promise<Tasks> { //
    const taskRepository = getRepository(Tasks);

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
      title
    });

    await taskRepository.save(task);

    return task;
  }

  async update(id: number, task: Tasks): Promise<Tasks> {
    const taskRepository = getRepository(Tasks);

    if(task.maximumScore < 0 || task.maximumScore > 10) {
      throw new AppError("Pontuação máxima inválida", 400);
    }

    await taskRepository.update(id, task);
    return task
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

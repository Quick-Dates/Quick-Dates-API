import { Between, getRepository, Repository } from "typeorm";
import { ITaskRepository } from "../interfaces/ITaskRepository";
import Tasks from "../models/Tasks";

export default class TaskRepository implements ITaskRepository {
  private ormRepository: Repository<Tasks>;
  constructor() {
    this.ormRepository = getRepository(Tasks);
  }

  public async create(task: Tasks): Promise<Tasks> {
    const newTask = this.ormRepository.create(task);
    await this.ormRepository.save(newTask);
    return newTask;
  }

  public async update(id: number, task: Tasks): Promise<Tasks> {
    await this.ormRepository.update(id, task);
    return task;
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAllByFinalDateAndIdTeam(finalDate: string, idTeam: number): Promise<Tasks[]> {
    return await this.ormRepository.find({
      where: {
        finalDate,
        id_team: idTeam
      }
    });
  }

  public async findAllByTeacher(idTeacher: string): Promise<Tasks[]> {
    return await this.ormRepository.find(
      {
        where:
          { id_teacher: idTeacher },
        join: {
          alias: "task", leftJoinAndSelect:
          {
            team: "task.team", course: "team.course"
          }
        }
      });
  }

  public async findAllByTeam(idTeam: number): Promise<Tasks[]> {
    return await this.ormRepository.find({ where: { id_team: idTeam } })
  }

  public async findById(id: number): Promise<Tasks | undefined> {
    return await this.ormRepository.findOne({ where: { id } });
  }

  public async findByIdAndIdTeacher(id: number, idTeacher: string): Promise<Tasks | undefined> {
    return await this.ormRepository.findOne({
      where:
        { id: id, id_teacher: idTeacher },
      join: {
        alias: "task", leftJoinAndSelect:
          { team: "task.team", course: "team.course" }
      }
    });
  }
  public async findAllTaskByWeek(idTeam: number, startDateCurrentWeek: string, finalDateCurrentWeek: string ): Promise<Tasks[]> {
    return await  this.ormRepository.find(
      {
        relations: ["statusTasks"],
        where:
        {
          id_team: idTeam,
          finalDate: Between(startDateCurrentWeek, finalDateCurrentWeek),
        }
      })
  }
}

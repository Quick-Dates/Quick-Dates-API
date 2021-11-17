import { ITaskRepository } from "../../interfaces/ITaskRepository";
import Tasks from "../../models/Tasks";

export default class FakeTaskRepository implements ITaskRepository {
  private tasks: Tasks[] = [];

  async create(task: Tasks): Promise<Tasks> {
    return new Promise((resolve) => {
      this.tasks.push(task);
      resolve(task);
    });
  }

  async update(id: number, task: Tasks): Promise<Tasks> {
    return new Promise((resolve) => {
      const taskIndex = this.tasks.findIndex(t => t.id === id);
      this.tasks[taskIndex] = task;
      resolve(task);
    });
  }

  async delete(id: number): Promise<void> {
    return new Promise((resolve) => {
      const taskIndex = this.tasks.findIndex(t => t.id === id);
      this.tasks.splice(taskIndex, 1);
      resolve();
    });
  }

  async findAllByFinalDateAndIdTeam(finalDate: string, idTeam: number): Promise<Tasks[]> {
    return new Promise((resolve) => {
      resolve(this.tasks);
    });
  }

  findAllByTeacher(idTeacher: string): Promise<Tasks[]> {
    return new Promise((resolve) => {
      resolve(this.tasks);
    });
  }

  findAllByTeam(idTeam: number): Promise<Tasks[]> {
    return new Promise((resolve) => {
      resolve(this.tasks);
    });
  }
  findAllTaskByWeek(idTeam: number, startDateCurrentWeek: string, finalDateCurrentWeek: string ): Promise<Tasks[]> {
    return new Promise((resolve) => {
      resolve(this.tasks);
    });
  }
  findById(id: number): Promise<Tasks | undefined> {
    return new Promise((resolve) => {
      resolve(this.tasks.find(t => t.id === id));
    });
  }
  findByIdAndIdTeacher(id: number, idTeacher: string): Promise<Tasks | undefined> {
    return new Promise((resolve) => {
      resolve(this.tasks.find(t => t.id === id && t.id_teacher === idTeacher));
    });
  }

}

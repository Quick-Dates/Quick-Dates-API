import Tasks from "../models/Tasks";

export interface ITaskRepository {
  create(task: Tasks): Promise<Tasks>
  update(id: number, task: Tasks): Promise<Tasks>
  delete(id: number): Promise<void>
  findAllByFinalDateAndIdTeam(finalDate: string, idTeam: number): Promise<Tasks[]>
  findAllByTeacher(idTeacher: string): Promise<Tasks[]>
  findAllByTeam(idTeam: number): Promise<Tasks[]>
  findById(id: number): Promise<Tasks | undefined>
  findByIdAndIdTeacher(id: number, idTeacher: string): Promise<Tasks | undefined>
  findAllTaskByWeek(idTeam: number, startDateCurrentWeek: string, finalDateCurrentWeek: string ): Promise<Tasks[]>
}

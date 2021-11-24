import { container, inject, injectable } from "tsyringe";
import { Between, Connection, getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import IStudentRepository from "../../Students/interfaces/IStudentRepository";
import Students from "../../Students/models/Students";
import ITeacherRepository from "../../Teachers/interfaces/ITeacherRepository";
import Teachers from "../../Teachers/models/Teachers";
import ITeamRepository from "../../Teams/interfaces/ITeamRepository";
import Teams from "../../Teams/models/Teams";
import { SituationTaskEnum } from "../enuns/SituationTaskEnum";
import { IStatisticsTaskWeek } from "../interfaces/IStatisticsTaskWeek";
import { IStatusTaskRepository } from "../interfaces/IStatusTaskRepository";
import { ITask } from "../interfaces/ITask";
import { ITaskRepository } from "../interfaces/ITaskRepository";
import Tasks from "../models/Tasks";
import StatusTaskService from "./StatusTaskService";

@injectable()
class TaskService {
  constructor(
    @inject('StatusTaskRepository')
    private statusTaskRepository: IStatusTaskRepository,
    @inject('StudentRepository')
    private studentRepository: IStudentRepository,
    @inject('TeacherRepository')
    private teacherRepository: ITeacherRepository,
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
    @inject('TeamRepository')
    private teamRepository: ITeamRepository,
  ) {

  }
  async create(idTeam: number, { description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title, id_teacher }: ITask)
    : Promise<{ task: Tasks, teacher: Teachers }> {
    const teacher = await this.teacherRepository.findById(id_teacher);

    if (!teacher) {
      throw new AppError('Professor não encontrado', 404);
    }

    const team = await this.teamRepository.findById(idTeam);

    if (!team) {
      throw new AppError('Turma não encontrada', 404);
    }

    if (maximumScore <= 0 || maximumScore > 10) {
      throw new AppError("Pontuação máxima inválida", 400);
    }

    if (!this.validateDates(startDate, startTime, finalDate, finalTime)) {
      throw new AppError("Datas inválidas", 400);
    }
    const tasksByFinalDate = await this.indexByFinalDate(finalDate, idTeam);

    if(tasksByFinalDate.length >= 2) {
      throw new AppError("Já existe duas atividades avaliativas para essa data", 400);
    }

    const task = await this.taskRepository.create({
      description,
      finalDate,
      finalTime,
      maximumScore,
      startDate,
      startTime,
      subject,
      title,
      teacher: teacher,
      id_teacher: teacher.id,
      id_team: team.id as number
    });


    return { task, teacher };
  }

  validateDates(startDate: string, startTime: string, finalDate: string, finalTime: string): boolean {
    const startDateTime = new Date(`${startDate} ${startTime}`);
    const finalDateTime = new Date(`${finalDate} ${finalTime}`);
    const currentDateTime = new Date();
    if (finalDateTime < startDateTime) {
      return false;
    }
    if (startDateTime < currentDateTime) {
      return false;
    }
    return true;
  }

  async indexByFinalDate(finalDate: string, id_team: number) {
    return await this.taskRepository.findAllByFinalDateAndIdTeam(finalDate, id_team);
  }

  async update(id: number, id_teacher: string, taskData: Tasks): Promise<Tasks> {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    const teacher = await this.teacherRepository.findById(id_teacher);
    if (!teacher) {
      throw new AppError("Professor não encontrado", 404);
    }

    if (teacher.id !== task.id_teacher) {
      throw new AppError("Você não tem permissão para alterar essa tarefa", 401);
    }

    if (taskData.maximumScore <= 0 || taskData.maximumScore > 10) {
      throw new AppError("Pontuação máxima inválida", 400);
    }

    await this.taskRepository.update(id, taskData);
    return taskData
  }

  async delete(id: number, idTeacher: string): Promise<Tasks> {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    const teacher = await this.teacherRepository.findById(idTeacher);

    if (!teacher) {
      throw new AppError("Professor não encontrado", 404);
    }

    if (teacher.id !== task.id_teacher) {
      throw new AppError("Você não tem permissão para deletar essa tarefa", 401);
    }

    await this.taskRepository.delete(id);

    return task;
  }

  async indexByTeacher(idTeacher: string): Promise<Tasks[]> {
    const teacher = await this.teacherRepository.findById(idTeacher);

    if (!teacher) {
      throw new AppError("Professor não encontrado", 404);
    }

    const tasks = await this.taskRepository.findAllByTeacher(teacher.id as string);

    return tasks;
  }

  async indexTasksWeek(student: Students): Promise<Tasks[]> {
    const team = await this.teamRepository.findById(student?.team?.id as number);

    if (!team) {
      throw new AppError("Turma não encontrada", 404);
    }

    const startDateCurrentWeek = new Date()
      .toLocaleDateString()

    const finalDateCurrentWeek = new Date(new Date().setDate(new Date().getDate() + 7))
      .toLocaleDateString()

    const tasks = await this.taskRepository.findAllTaskByWeek(team.id as number, startDateCurrentWeek, finalDateCurrentWeek);

      tasks.forEach(task => {
        task.statusTasks?.forEach(statusTask => {
          if (statusTask.id_student === student.id) {
            task.situation = statusTask.situation;
          }
        });
        delete task.statusTasks;
        delete task.id_teacher;
      });

    return tasks;
  }

  statisticsWeekTasks(Tasks: Tasks[]): IStatisticsTaskWeek {
    const length = Tasks.length;
    const completed = Tasks.filter(task => task.situation === SituationTaskEnum.CONCLUIDA).length
    const inProgress = Tasks.filter(task => task.situation === SituationTaskEnum.EM_ANDAMENTO).length
    const successPercentage = (completed / length) * 100
    return {
      length: length,
      completed,
      inProgress,
      successPercentage
    }
  }

  async indexByTeam(idTeam: number): Promise<Tasks[]> {
    const team = await this.teamRepository.findById(idTeam);

    if (!team) {
      throw new AppError("Turma não encontrada", 404);
    }

    const tasks = await this.taskRepository.findAllByTeam(team.id as number);

    return tasks;
  }

  async indexTasksByStudent(idStudent: string): Promise<Tasks[]> {
    const student = await this.studentRepository.findById(idStudent);

    if (!student) {
      throw new AppError("Aluno não encontrado", 404);
    }

    const statusTaskService = container.resolve(StatusTaskService);
    const tasks = await statusTaskService.indexTasksByStudent(idStudent) as any;

    return tasks;
  }

  async indexByIdWithStudent(idTask: number, idStudent: string): Promise<Tasks> {
    const studentRepository = getRepository(Students);
    const taskRepository = getRepository(Tasks);

    const student = await studentRepository.findOne({ where: { id: idStudent } });

    if (!student) {
      throw new AppError("Aluno não encontrado", 404);
    }

    let task = await taskRepository.findOne({ where: { id: idTask } });

    if (!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    const statusTaskService = container.resolve(StatusTaskService);

    task.situation = await statusTaskService.indexSituation(idTask, idStudent) as any;

    delete task.id_teacher;

    return task;
  }

  async indexByIdWithTeacher(idTask: number, idTeacher: string): Promise<Tasks> {
    const teacherRepository = getRepository(Teachers);
    const taskRepository = getRepository(Tasks);

    const teacher = await teacherRepository.findOne({ where: { id: idTeacher } });

    if (!teacher) {
      throw new AppError("Professor não encontrado", 404);
    }

    let task = await taskRepository.findOne({ where: { id: idTask, id_teacher: idTeacher }, join: { alias: "task", leftJoinAndSelect: { team: "task.team", course: "team.course" } } });

    if (!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    if (teacher.id !== task.id_teacher) {
      throw new AppError("Você não tem permissão para visualizar essa tarefa", 401);
    }

    delete task.id_teacher;

    const yearCurrent = new Date().getFullYear();

    if(task.team) {
      task.team.name = `${(yearCurrent - task.team.yearCreation) + 1}° ano`;
    }


    return task;
  }

}

export default TaskService;

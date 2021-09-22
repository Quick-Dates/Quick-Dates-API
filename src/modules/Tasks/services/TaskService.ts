import { getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Students from "../../Students/models/Students";
import Teachers from "../../Teachers/models/Teachers";
import Teams from "../../Teams/models/Teams";
import { ITask } from "../interfaces/ITask";
import StatusTasks from "../models/StatusTasks";
import Tasks from "../models/Tasks";
import StatusTaskService from "./StatusTaskService";

class TaskService {
  async create(idTeam: number, { description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title, id_teacher }: ITask): Promise<Tasks> { //
    const taskRepository = getRepository(Tasks);
    const studentRepository = getRepository(Students);
    const teacherRepository = getRepository(Teachers);

    const teacher = await teacherRepository.findOne({ where: { id: id_teacher } });

    if (!teacher) {
      throw new AppError('Professor não encontrado', 404);
    }

    if (maximumScore < 0 || maximumScore > 10) {
      throw new AppError("Pontuação máxima inválida", 400);
    }
    if(!this.validateDates(startDate, startTime, finalDate, finalTime)){
      throw new AppError("Datas inválidas", 400);
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

    const studentsByTeam = await studentRepository.find({ where: { id_team: idTeam } });
    const statusTaskService = new StatusTaskService();
    studentsByTeam.forEach(async student => {
      await statusTaskService.create({
        id_student: student.id,
        id_task: task.id
      });
    });
    return task;
  }

  private validateDates(startDate: string, startTime: string, finalDate: string, finalTime: string): boolean {
    const startDateTime = new Date(`${startDate} ${startTime}`);
    const finalDateTime = new Date(`${finalDate} ${finalTime}`);
    if(finalDateTime < startDateTime){
      return false;
    }
    if(startDateTime < new Date()){
      return false;
    }
    return true;
  }

  async update(id: number, id_teacher: string, taskData: Tasks): Promise<Tasks> {
    const taskRepository = getRepository(Tasks);
    const teacherRepository = getRepository(Teachers);

    const task = await taskRepository.findOne({ where: { id } });

    if (!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    const teacher = await teacherRepository.findOne({ where: { id: id_teacher } });
    if (!teacher) {
      throw new AppError("Professor não encontrado", 404);
    }

    if (teacher.id !== task.id_teacher) {
      throw new AppError("Você não tem permissão para alterar essa tarefa", 401);
    }

    if (taskData.maximumScore < 0 || taskData.maximumScore > 10) {
      throw new AppError("Pontuação máxima inválida", 400);
    }

    await taskRepository.update(id, taskData);
    return taskData
  }

  async delete(id: number): Promise<Tasks> {
    const taskRepository = getRepository(Tasks);
    const task = await taskRepository.findOne({ where: { id } });

    if (!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    await taskRepository.delete(id);

    return task;
  }

  async indexByTeacher(idTeacher: number): Promise<Tasks[]> {
    const taskRepository = getRepository(Tasks);
    const teacherRepository = getRepository(Teachers);

    const teacher = await teacherRepository.findOne({ where: { id: idTeacher } });

    if (!teacher) {
      throw new AppError("Professor não encontrado", 404);
    }

    const tasks = await taskRepository.find({ where: { id_teacher: teacher.id } });

    return tasks;
  }

  async indexByTeam(idTeam: number): Promise<Tasks[]> {
    const taskRepository = getRepository(Tasks);
    const teamRepository = getRepository(Teams);

    const team = await teamRepository.findOne({ where: { id: idTeam } });

    if (!team) {
      throw new AppError("Turma não encontrada", 404);
    }

    const tasks = await taskRepository.find({ where: { id_team: team.id } });

    return tasks;
  }

  async indexTasksByTeam(idStudent: number, idTeam: number): Promise<Tasks[]> {
    const studentRepository = getRepository(Students);

    const student = await studentRepository.findOne({ where: { id: idStudent } });

    if (!student) {
      throw new AppError("Aluno não encontrado", 404);
    }

    const statusTaskService = new StatusTaskService();
    const tasks = await statusTaskService.indexTasksByStudent(idStudent) as any;

    return tasks;
  }

  async indexByIdWithStudent(idTask: number, idStudent: number): Promise<Tasks> {
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

    const statusTaskService = new StatusTaskService();

    task = await statusTaskService.indexTaskByStudentAndTask(idTask , idStudent) as any;

    if (!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    return task;
  }

  async indexByIdWithTeacher(idTask: number, idTeacher: number): Promise<Tasks> {
    const teacherRepository = getRepository(Teachers);
    const taskRepository = getRepository(Tasks);

    const teacher = await teacherRepository.findOne({ where: { id: idTeacher } });

    if (!teacher) {
      throw new AppError("Professor não encontrado", 404);
    }

    let task = await taskRepository.findOne({ where: { id: idTask, id_teacher: idTeacher } });

    if (!task) {
      throw new AppError("Tarefa não encontrada", 404);
    }

    if(teacher.id !== task.id_teacher) {
      throw new AppError("Você não tem permissão para visualizar essa tarefa", 401);
    }

    return task;
  }

}

export default TaskService;

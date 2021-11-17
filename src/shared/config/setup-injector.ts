import { container } from "tsyringe"
import IStudentRepository from "../../modules/Students/interfaces/IStudentRepository"
import StudentsRepository from "../../modules/Students/repositories/StudentsRepository"
import StudentService from "../../modules/Students/services/StudentService"
import StatusTaskRepository from "../../modules/Tasks/repositories/StatusTaskRepository"
import TaskRepository from "../../modules/Tasks/repositories/TaskRepository"
import TeacherRepository from "../../modules/Teachers/repositories/TeacherRepository"
import TeacherService from "../../modules/Teachers/services/TeacherService"
import CourseRepository from "../../modules/Teams/repositories/CourseRepository"
import TeamRepository from "../../modules/Teams/repositories/TeamRepository"
import TeamService from "../../modules/Teams/services/TeamService"
import NodeMailerService from "../services/NodeMailerService"

export default () => {
  container.registerSingleton<IStudentRepository>(
    'StudentRepository',
    StudentsRepository
  )

  container.registerSingleton(
    'NodeMailerService',
    NodeMailerService
  )


  container.registerSingleton(
    'TeamService',
    TeamService
  )

  container.registerSingleton(
    'TeacherRepository',
    TeacherRepository
  )
  container.registerSingleton(
    'CourseRepository',
    CourseRepository
  )
  container.registerSingleton(
    'TeamRepository',
    TeamRepository
  )
  container.registerSingleton(
    'StatusTaskRepository',
    StatusTaskRepository
  )
  container.registerSingleton(
    'TaskRepository',
    TaskRepository
  )

}

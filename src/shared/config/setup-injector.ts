import { container } from "tsyringe"
import IStudentRepository from "../../modules/Students/interfaces/IStudentRepository"
import StudentsRepository from "../../modules/Students/repositories/StudentsRepository"
import StudentService from "../../modules/Students/services/StudentService"
import TeacherRepository from "../../modules/Teachers/repositories/TeacherRepository"
import TeacherService from "../../modules/Teachers/services/TeacherService"
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

}

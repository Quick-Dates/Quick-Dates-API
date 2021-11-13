import { container } from "tsyringe"
import IStudentRepository from "../../modules/Students/interfaces/IStudentRepository"
import StudentsRepository from "../../modules/Students/repositories/StudentsRepository"
import StudentService from "../../modules/Students/services/StudentService"
import TeamService from "../../modules/Teams/services/TeamService"
import NodeMailerService from "../services/NodeMailerService"

export default () => {
  container.registerSingleton<IStudentRepository>(
    'StudentRepository',
    StudentsRepository
  )

  container.registerSingleton(
    'StudentService',
    StudentService
  )

  container.registerSingleton(
    'NodeMailerService',
    NodeMailerService
  )

  container.registerSingleton(
    'TeamService',
    TeamService
  )
}

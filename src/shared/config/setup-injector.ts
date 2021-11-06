import { container } from "tsyringe"
import IStudentRepository from "../../modules/Students/interfaces/IStudentRepository"
import StudentsRepository from "../../modules/Students/repositories/StudentsRepository"
import StudentService from "../../modules/Students/services/StudentService"

export default () => {
  container.registerSingleton<IStudentRepository>(
    'StudentRepository',
    StudentsRepository
  )

  container.registerSingleton(
    'StudentService',
    StudentService
  )
}

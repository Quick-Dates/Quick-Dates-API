import { getRepository, Repository, UpdateResult } from "typeorm";
import IStudentRepository from "../interfaces/IStudentRepository";
import Students from "../models/Students";

export default class StudentsRepository implements IStudentRepository {
  private ormRepository: Repository<Students>;
  constructor() {
    this.ormRepository = getRepository(Students);
  }

  async findById(id: string): Promise<Students | undefined> {
    return await this.ormRepository.findOne({ where: { id }, join: { alias: "task", leftJoinAndSelect: { team: "task.team", course: "team.course" } } });
  }

  async findBySuapId(suapId: number): Promise<Students | undefined> {
    return await this.ormRepository.findOne({ where: { suapId } });
  }

  async update(id: string, student: Students): Promise<void> {
    await this.ormRepository.save(student);
  }

  async create(student: Students): Promise<Students> {
    const studentCreated = this.ormRepository.create(student);
    const studentSaved = await this.ormRepository.save(studentCreated)
    return studentSaved;
  }

  async findAllByTeamId(teamId: number): Promise< Students[]> {
    return await this.ormRepository.find({ where: { id_team: teamId } });
  }
}

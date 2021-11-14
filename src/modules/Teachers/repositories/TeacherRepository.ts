import { getRepository, Repository, UpdateResult } from "typeorm";
import ITeacherRepository from "../interfaces/ITeacherRepository";
import Teachers from "../models/Teachers";

export default class TeacherRepository implements ITeacherRepository {
  private ormRepository: Repository<Teachers>;
  constructor() {
    this.ormRepository = getRepository(Teachers);
  }

  async findById(id: string): Promise<Teachers | undefined> {
    return await this.ormRepository.findOne({where: {id}});
  }

  async findBySuapId(suapId: number): Promise<Teachers | undefined> {
    return await this.ormRepository.findOne({ where: { suapId } });
  }

  async update(id: string, student: Teachers): Promise<void> {
    await this.ormRepository.update(id, student);
  }

  async create(student: Teachers): Promise<Teachers> {
    const studentCreated = this.ormRepository.create(student);
    await this.ormRepository.save(studentCreated)
    return studentCreated;
  }
}

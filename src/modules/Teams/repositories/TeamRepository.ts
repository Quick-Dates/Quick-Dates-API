import { getRepository, Repository } from "typeorm";
import ITeamRepository from "../interfaces/ITeamRepository";
import Teams from "../models/Teams";

export default class TeamRepository implements ITeamRepository {
  private ormRepository: Repository<Teams>;

  constructor() {
    this.ormRepository = getRepository(Teams);
  }

  async create(team: Teams): Promise<Teams> {
    const teamCreated = this.ormRepository.create(team);
    await this.ormRepository.save(team);
    return teamCreated;
  }
  async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
  async findAll(yearCurrent: number): Promise<Teams[]> {
    return await this.ormRepository.createQueryBuilder()
      .select("teams")
      .from(Teams, "teams")
      .where("teams.yearCreation <= :yearCurrent AND teams.yearCreation => :yearCurrent - 3", { yearCurrent })
      .execute();
  }
  async findAllByCourse(id_course: number, yearCurrent: number): Promise<Teams[]> {
    return await this.ormRepository.createQueryBuilder()
      .select("*")
      .from(Teams, "teams")
      .where("teams.yearCreation <= :yearCurrent AND teams.yearCreation >= :yearCurrent - 3", { yearCurrent })
      .andWhere("teams.id_course = :id_course", { id_course })
      .execute();
  }
  async findById(id: number): Promise<Teams | undefined> {
    return await this.ormRepository.findOne({ where: { id } });
  }

  async findByYearCretionAndIdCourse(id_course: number, yearCreation: number): Promise<Teams | undefined> {
    return await this.ormRepository.findOne({ where: { id_course, yearCreation } });
  }
  async update(id: number, team: Teams): Promise<Teams> {
    await this.ormRepository.update({ id }, team);
    return team;
  }
}

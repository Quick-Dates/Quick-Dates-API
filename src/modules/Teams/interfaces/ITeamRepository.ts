import Teams from "../models/Teams";

export default interface ITeamRepository {
  findByYearCretionAndIdCourse(id_course: number, yearCreation: number): Promise<Teams| undefined>;
  findById(id: number): Promise<Teams | undefined>;
  delete(id: number): Promise<void>;
  update(id: number, team: Teams): Promise<Teams>;
  create(team: Teams): Promise<Teams>;
  findAll(yearCurrent: number): Promise<Teams[]>;
  findAllByCourse(idCourse: number, yearCurrent: number): Promise<Teams[]>;
}

import ITeamRepository from "../../interfaces/ITeamRepository";
import Teams from "../../models/Teams";

export default class FakeTeamRepository implements ITeamRepository {
  private teams: Teams[] = [];

  create(team: Teams): Promise<Teams> {
    this.teams.push(team);
    return Promise.resolve(team);
  }
  delete(id: number): Promise<void> {
    const teamIndex = this.teams.findIndex(team => team.id === id);
    this.teams.splice(teamIndex, 1);
    return Promise.resolve();
  }
  findAll(): Promise<Teams[]> {
    return Promise.resolve(this.teams);
  }
  findById(id: number): Promise<Teams | undefined> {
    const team = this.teams.find(team => team.id === id);
    return Promise.resolve(team);
  }
  findAllByCourse(course_id: number): Promise<Teams[]> {
    const teams = this.teams.filter(team => team.id_course === course_id);
    return Promise.resolve(teams);
  }
  findByYearCretionAndIdCourse(id_course: number, yearCreation: number): Promise<Teams | undefined> {
    const team = this.teams.find(team => team.yearCreation === yearCreation && team.id_course === id_course);
    return Promise.resolve(team);
  }
  update(id: number, team: Teams): Promise<Teams> {
    const teamIndex = this.teams.findIndex(team => team.id === id);
    this.teams[teamIndex] = team;
    return Promise.resolve(team);
  }

}

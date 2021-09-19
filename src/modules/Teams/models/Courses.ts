import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LevelCourseEnum } from "../enum/LevelCourseEnum";
import { TypeCourseEnum } from "../enum/TypeCourseEnum";
import Teams from "./Teams";

@Entity('courses')
class Courses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ['INFORMATICA', 'ALIMENTOS', 'SECRETARIADO' , 'QUIMICA']
  })
  name: TypeCourseEnum;

  @Column({
    type: 'enum',
    enum: ['EMI', 'TADS']
  })
  level: LevelCourseEnum;

  @OneToMany(() => Teams, (teams) => teams.course)
  teams: Teams[];
}

export default Courses;

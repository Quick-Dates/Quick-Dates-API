import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LevelCourseEnum } from "../enum/LevelCourseEnum";
import { TypeCourseEnum } from "../enum/TypeCourseEnum";

@Entity('cousers')
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
}

export default Courses;

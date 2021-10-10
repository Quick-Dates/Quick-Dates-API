import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Students from "../../Students/models/Students";
import Tasks from "../../Tasks/models/Tasks";
import Courses from "./Courses";

@Entity('teams')
class Teams {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  yearCreation: number;

  name?: string;

  @Column()
  id_course: number;

  @ManyToOne(() => Courses)
  @JoinColumn({ name: 'id_course', referencedColumnName: 'id' })
  course: Courses;

  @OneToMany(() => Students, (students) => students.team)
  students: Students[];

  @OneToMany(() => Tasks, (tasks) => tasks.team, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  tasks: Tasks[];
}

export default Teams;

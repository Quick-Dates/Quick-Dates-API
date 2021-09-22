import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Teachers from "../../Teachers/models/Teachers";
import StatusTasks from "./StatusTasks";

@Entity('tasks')
class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  startDate: string;

  @Column()
  finalDate: string;

  @Column()
  maximumScore: Number;

  @Column()
  description: string;

  @Column()
  startTime: string;

  @Column()
  finalTime: string;

  @Column()
  subject: string;

  @Column()
  id_teacher?: string;

  @ManyToOne(() => Teachers)
  @JoinColumn({name: 'id_teacher', referencedColumnName: 'id'})
  teacher: Teachers;

  @OneToMany(() => StatusTasks, (statusTask) => statusTask.task, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  statusTasks: StatusTasks[];
}

export default Tasks;

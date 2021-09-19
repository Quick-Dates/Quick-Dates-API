import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

  @OneToMany(() => StatusTasks, (statusTask) => statusTask.task)
  statusTasks: StatusTasks[];
}

export default Tasks;

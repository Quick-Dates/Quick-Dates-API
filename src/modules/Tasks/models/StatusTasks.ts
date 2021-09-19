import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Students from "../../Students/models/Students";
import { SituationTaskEnum } from "../enuns/SituationTaskEnum";
import Tasks from "./Tasks";

@Entity('status_tasks')
class StatusTasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ['EM_ANDAMENTO', 'CONCLUIDA', 'ATRASADA'],
  })
  situation: SituationTaskEnum;

  @Column()
  id_student: string;

  @Column()
  id_task: number;

  @ManyToOne(() => Students)
  @JoinColumn({name: 'id_student', referencedColumnName: 'id'})
  student: Students;

  @ManyToOne(() => Tasks)
  @JoinColumn({name: 'id_task', referencedColumnName: 'id'})
  task: Tasks;
}

export default StatusTasks;

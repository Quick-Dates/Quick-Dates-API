import { Column, Entity, OneToMany } from "typeorm";
import { GenderEnum } from "../../../shared/enum/GenderEnum";
import Tasks from "../../Tasks/models/Tasks";

@Entity('teachers')
class Teachers {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => "uuid_generate_v4()"
  })
  id?: string;

  @Column()
  registration: string;

  @Column()
  password?: string;

  @Column()
  name: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  birthDate: string;

  @Column({
    type: 'enum',
    enum: ['M', 'F'],
  })
  gender: GenderEnum;

  @Column()
  suapId?: number;

  @OneToMany(() => Tasks, (tasks) => tasks.teacher)
  tasks?: Tasks[];
}

export default Teachers;

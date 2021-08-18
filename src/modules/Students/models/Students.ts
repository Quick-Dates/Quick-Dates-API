import { Column, Entity } from "typeorm";
import { GenderEnum } from "../enum/GenderEnum";

@Entity('students')
class Students {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => "uuid_generate_v4()"
  })
  id: string;

  @Column()
  registration: number;

  @Column()
  password?: string;

  @Column()
  name: string;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  birth_date: string;

  @Column()
  situation: string;

  @Column()
  systematic_situation: string;

  @Column({
    type: 'enum',
    enum: ['M', 'F'],
  })
  gender: GenderEnum;

  @Column()
  suap_id: number;
}

export default Students;

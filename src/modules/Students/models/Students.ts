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
  fullName: string;

  @Column()
  email: string;

  @Column()
  birthDate: string;

  @Column()
  situation: string;

  @Column()
  systematicSituation: string;

  @Column({
    type: 'enum',
    enum: ['M', 'F'],
  })
  gender: GenderEnum;

  @Column()
  suapId: number;
}

export default Students;

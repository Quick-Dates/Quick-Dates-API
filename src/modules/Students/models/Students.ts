import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { GenderEnum } from "../../../shared/enum/GenderEnum";
import Teams from "../../Teams/models/Teams";

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

  @Column()
  id_team: number;

  @ManyToOne(() => Teams)
  @JoinColumn({name: 'id_team'})
  team: Teams;
}

export default Students;

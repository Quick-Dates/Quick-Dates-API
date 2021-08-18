import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { IParamsCreateStudent } from '../interfaces/IParams';
import Students from '../models/Students';

class StudentService {
  async create({id, matricula, nome_usual, email, data_nascimento, vinculo, sexo, password}: IParamsCreateStudent): Promise<Students> {
    const studentRepository = getRepository(Students);

    const hashedPassword = await hash(password, 10);

    const student = studentRepository.create({
      registration: matricula,
      name: nome_usual,
      full_name: vinculo.nome,
      password: hashedPassword,
      email,
      birth_date: data_nascimento,
      situation: vinculo.situacao,
      systematic_situation: vinculo.situacao_sistemica,
      gender: sexo,
      suap_id: id
    });
    await studentRepository.save(student)

    return student
  }
}

export default StudentService;

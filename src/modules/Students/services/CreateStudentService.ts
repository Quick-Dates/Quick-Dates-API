import Student from '../models/Students';

class CreateTaskService {
  async execute(): Promise<Student> {
    console.log('criei um aluno');
    return await {
      id: 'id_aluno',
      nome: 'Mauro'
    }
  }
}

export default CreateTaskService;

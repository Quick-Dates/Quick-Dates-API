import Student from '../models/Tasks';

class CreateTaskService {
  async execute(): Promise<Student> {
    console.log('criei uma tarefa');
    return await {
      id: 'id_tarefa',
      nome: 'Prova de matemática'
    }
  }
}

export default CreateTaskService;

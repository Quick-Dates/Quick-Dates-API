import Student from '../models/Tasks';

class CreateTaskService {
  async execute(): Promise<Student> {
    return await {
      id: 'id_tarefa',
      nome: 'Prova de matemática'
    }
  }
}

export default CreateTaskService;

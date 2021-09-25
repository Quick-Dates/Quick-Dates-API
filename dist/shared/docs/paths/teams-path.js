"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsStudentPath = exports.teamCoursesPath = exports.teamsByCoursePath = void 0;
exports.teamsByCoursePath = {
    get: {
        tags: ['Teams'],
        summary: 'Listar turmas de um curso',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'idCourse',
                in: 'path',
                description: 'id do curso',
                required: true,
                schema: {
                    type: 'integer',
                }
            }
        ],
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/teamsSchema'
                        }
                    }
                }
            }
        }
    },
};
exports.teamCoursesPath = {
    get: {
        tags: ['Teams'],
        summary: 'Listar todos os cursos',
        security: [
            {
                bearerAuth: []
            }
        ],
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/coursesSchema'
                        }
                    }
                }
            }
        }
    },
};
exports.teamsStudentPath = {
    put: {
        tags: ['Teams'],
        summary: 'Incluir um student em uma turma',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'idStudent',
                in: 'path',
                description: 'id do aluno',
                required: true,
                schema: {
                    type: 'string',
                }
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/teamCreateBody'
                    }
                }
            }
        },
        responses: {
            201: {
                description: 'Sucesso',
            }
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbXMtcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZG9jcy9wYXRocy90ZWFtcy1wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsaUJBQWlCLEdBQUc7SUFDL0IsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ2YsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxVQUFVLEVBQUUsRUFBRTthQUNmO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsRUFBRSxFQUFFLE1BQU07Z0JBQ1YsV0FBVyxFQUFFLGFBQWE7Z0JBQzFCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsU0FBUztpQkFDaEI7YUFDRjtTQUNGO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsR0FBRyxFQUFFO2dCQUNILFdBQVcsRUFBRSxTQUFTO2dCQUN0QixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCLEVBQUU7d0JBQ2xCLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsdUJBQXVCO3lCQUM5QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUE7QUFFWSxRQUFBLGVBQWUsR0FBRztJQUM3QixHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDZixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLFVBQVUsRUFBRSxFQUFFO2FBQ2Y7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULEdBQUcsRUFBRTtnQkFDSCxXQUFXLEVBQUUsU0FBUztnQkFDdEIsT0FBTyxFQUFFO29CQUNQLGtCQUFrQixFQUFFO3dCQUNsQixNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLHlCQUF5Qjt5QkFDaEM7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBRztJQUM5QixHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDZixPQUFPLEVBQUUsaUNBQWlDO1FBQzFDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLFVBQVUsRUFBRSxFQUFFO2FBQ2Y7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixFQUFFLEVBQUUsTUFBTTtnQkFDVixXQUFXLEVBQUUsYUFBYTtnQkFDMUIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxRQUFRO2lCQUNmO2FBQ0Y7U0FDRjtRQUNELFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRTtnQkFDUCxrQkFBa0IsRUFBRTtvQkFDbEIsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSwwQkFBMEI7cUJBQ2pDO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULEdBQUcsRUFBRTtnQkFDSCxXQUFXLEVBQUUsU0FBUzthQUN2QjtTQUNGO0tBQ0Y7Q0FDRixDQUFBIn0=
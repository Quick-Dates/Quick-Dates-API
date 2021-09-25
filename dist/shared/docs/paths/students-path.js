"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentGradesPath = exports.studentRankingPath = exports.studentPathWithId = exports.studentsPathSignin = void 0;
exports.studentsPathSignin = {
    post: {
        tags: ['Students'],
        summary: 'Aluno se autenticar no Quick Dates',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/studentSignin'
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/studentSigninResponse'
                        }
                    }
                }
            }
        }
    },
};
exports.studentPathWithId = {
    get: {
        tags: ['Students'],
        summary: 'Dados do aluno pelo id',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id do aluno',
                required: true,
                schema: {
                    type: 'string',
                }
            }
        ],
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/studentGetByIdResponse'
                        }
                    }
                }
            }
        }
    },
};
exports.studentRankingPath = {
    get: {
        tags: ['Students'],
        summary: 'Ranking de alunos de uma turma',
        security: [
            {
                bearerAuth: []
            }
        ],
        responses: {
            503: {
                description: 'Warn',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/studentFeatureError'
                        }
                    }
                }
            }
        }
    },
};
exports.studentGradesPath = {
    get: {
        tags: ['Students'],
        summary: 'Notas de um aluno',
        security: [
            {
                bearerAuth: []
            }
        ],
        responses: {
            503: {
                description: 'Warn',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/studentFeatureError'
                        }
                    }
                }
            }
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudHMtcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZG9jcy9wYXRocy9zdHVkZW50cy1wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsa0JBQWtCLEdBQUc7SUFDaEMsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxvQ0FBb0M7UUFDN0MsV0FBVyxFQUFFO1lBQ1gsT0FBTyxFQUFFO2dCQUNQLGtCQUFrQixFQUFFO29CQUNsQixNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLHlCQUF5QjtxQkFDaEM7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsR0FBRyxFQUFFO2dCQUNILFdBQVcsRUFBRSxTQUFTO2dCQUN0QixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCLEVBQUU7d0JBQ2xCLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsaUNBQWlDO3lCQUN4QztxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUE7QUFFWSxRQUFBLGlCQUFpQixHQUFHO0lBQy9CLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUNsQixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLFVBQVUsRUFBRSxFQUFFO2FBQ2Y7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEVBQUUsRUFBRSxNQUFNO2dCQUNWLFdBQVcsRUFBRSxhQUFhO2dCQUMxQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7YUFDRjtTQUNGO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsR0FBRyxFQUFFO2dCQUNILFdBQVcsRUFBRSxTQUFTO2dCQUN0QixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCLEVBQUU7d0JBQ2xCLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsa0NBQWtDO3lCQUN6QztxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUE7QUFFWSxRQUFBLGtCQUFrQixHQUFHO0lBQ2hDLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUNsQixPQUFPLEVBQUUsZ0NBQWdDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLFVBQVUsRUFBRSxFQUFFO2FBQ2Y7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULEdBQUcsRUFBRTtnQkFDSCxXQUFXLEVBQUUsTUFBTTtnQkFDbkIsT0FBTyxFQUFFO29CQUNQLGtCQUFrQixFQUFFO3dCQUNsQixNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLCtCQUErQjt5QkFDdEM7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFBO0FBRVksUUFBQSxpQkFBaUIsR0FBRztJQUMvQixHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDbEIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxVQUFVLEVBQUUsRUFBRTthQUNmO1NBQ0Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxHQUFHLEVBQUU7Z0JBQ0gsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxrQkFBa0IsRUFBRTt3QkFDbEIsTUFBTSxFQUFFOzRCQUNOLElBQUksRUFBRSwrQkFBK0I7eUJBQ3RDO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQSJ9
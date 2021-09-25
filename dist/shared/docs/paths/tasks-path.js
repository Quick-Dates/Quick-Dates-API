"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksSituationPath = exports.tasksByIdByTeacherPath = exports.tasksByIdByStudentPath = exports.tasksByStudentPath = exports.tasksByTeacherPath = exports.tasksPathWithId = exports.tasksTeamPath = void 0;
exports.tasksTeamPath = {
    post: {
        tags: ['Tasks'],
        summary: 'Criar uma tarefa para uma turma',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'idTeam',
                in: 'path',
                description: 'id da turma',
                required: true,
                schema: {
                    type: 'integer',
                }
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/taskParams'
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
exports.tasksPathWithId = {
    put: {
        tags: ['Tasks'],
        summary: 'Editar uma tarefa pelo id',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id da tarefa',
                required: true,
                schema: {
                    type: 'integer',
                }
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/taskParams'
                    }
                }
            }
        },
        responses: {
            204: {
                description: 'Sucesso',
            }
        }
    },
    delete: {
        tags: ['Tasks'],
        summary: 'Deletar uma tarefa pelo id',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id da tarefa',
                required: true,
                schema: {
                    type: 'integer',
                }
            }
        ],
        responses: {
            204: {
                description: 'Sucesso',
            }
        }
    },
};
exports.tasksByTeacherPath = {
    get: {
        tags: ['Tasks'],
        summary: 'Listar todas as tarefas que o professor marcou',
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
                            $ref: '#/schemas/tasks'
                        }
                    }
                }
            }
        }
    },
};
exports.tasksByStudentPath = {
    get: {
        tags: ['Tasks'],
        summary: 'Listar todas as tarefas do aluno',
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
                            $ref: '#/schemas/tasks'
                        }
                    }
                }
            }
        }
    },
};
exports.tasksByIdByStudentPath = {
    get: {
        tags: ['Tasks'],
        summary: 'Detalhes tarefas do aluno',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id da tarefa',
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
                            $ref: '#/schemas/taskDetail'
                        }
                    }
                }
            }
        }
    },
};
exports.tasksByIdByTeacherPath = {
    get: {
        tags: ['Tasks'],
        summary: 'Detalhes tarefas que o professor marcou',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id da tarefa',
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
                            $ref: '#/schemas/task'
                        }
                    }
                }
            }
        }
    },
};
exports.tasksSituationPath = {
    patch: {
        tags: ['Tasks'],
        summary: 'Alterar o estado de uma tarefa',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id da tarefa',
                required: true,
                schema: {
                    type: 'integer',
                }
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/taskSituationBody'
                    }
                }
            }
        },
        responses: {
            204: {
                description: 'Sucesso',
            }
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MtcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZG9jcy9wYXRocy90YXNrcy1wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsYUFBYSxHQUFHO0lBQzNCLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNmLE9BQU8sRUFBRSxpQ0FBaUM7UUFDMUMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsVUFBVSxFQUFFLEVBQUU7YUFDZjtTQUNGO1FBQ0QsVUFBVSxFQUFFO1lBQ1Y7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsRUFBRSxFQUFFLE1BQU07Z0JBQ1YsV0FBVyxFQUFFLGFBQWE7Z0JBQzFCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsU0FBUztpQkFDaEI7YUFDRjtTQUNGO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsT0FBTyxFQUFFO2dCQUNQLGtCQUFrQixFQUFFO29CQUNsQixNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLHNCQUFzQjtxQkFDN0I7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsR0FBRyxFQUFFO2dCQUNILFdBQVcsRUFBRSxTQUFTO2FBQ3ZCO1NBQ0Y7S0FDRjtDQUNGLENBQUE7QUFDWSxRQUFBLGVBQWUsR0FBRztJQUM3QixHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDZixPQUFPLEVBQUUsMkJBQTJCO1FBQ3BDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLFVBQVUsRUFBRSxFQUFFO2FBQ2Y7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEVBQUUsRUFBRSxNQUFNO2dCQUNWLFdBQVcsRUFBRSxjQUFjO2dCQUMzQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxF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
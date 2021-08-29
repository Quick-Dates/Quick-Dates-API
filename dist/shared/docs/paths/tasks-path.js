"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksPathWithId = exports.tasksPath = void 0;
exports.tasksPath = {
    get: {
        tags: ['Tasks'],
        summary: 'Listar tarefas',
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
    post: {
        tags: ['Tasks'],
        summary: 'Criar uma tarefa',
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
exports.tasksPathWithId = {
    put: {
        tags: ['Tasks'],
        summary: 'Editar uma tarefa',
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id da task',
                required: true,
                schema: {
                    type: 'integer',
                    format: 'int64'
                }
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/task'
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
                            $ref: '#/schemas/task'
                        }
                    }
                }
            }
        }
    },
    get: {
        tags: ['Tasks'],
        summary: 'Detalhes de uma tarefa',
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id da task',
                required: true,
                schema: {
                    type: 'integer',
                    format: 'int64'
                }
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/task'
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
                            $ref: '#/schemas/task'
                        }
                    }
                }
            }
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MtcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZG9jcy9wYXRocy90YXNrcy1wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsU0FBUyxHQUFHO0lBQ3ZCLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNmLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsU0FBUyxFQUFFO1lBQ1QsR0FBRyxFQUFFO2dCQUNILFdBQVcsRUFBRSxTQUFTO2dCQUN0QixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCLEVBQUU7d0JBQ2xCLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsaUJBQWlCO3lCQUN4QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNmLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsV0FBVyxFQUFFO1lBQ1gsT0FBTyxFQUFFO2dCQUNQLGtCQUFrQixFQUFFO29CQUNsQixNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLHNCQUFzQjtxQkFDN0I7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsR0FBRyxFQUFFO2dCQUNILFdBQVcsRUFBRSxTQUFTO2dCQUN0QixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCLEVBQUU7d0JBQ2xCLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsZ0JBQWdCO3lCQUN2QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUE7QUFDWSxRQUFBLGVBQWUsR0FBRztJQUM3QixHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDZixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEVBQUUsRUFBRSxNQUFNO2dCQUNWLFdBQVcsRUFBRSxZQUFZO2dCQUN6QixRQUFRLEVBQUUsSUFBSTtnQkFDZCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFNBQVM7b0JBQ2YsTUFBTSxFQUFFLE9BQU87aUJBQ2hCO2FBQ0Y7U0FDRjtRQUNELFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRTtnQkFDUCxrQkFBa0IsRUFBRTtvQkFDbEIsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxnQkFBZ0I7cUJBQ3ZCO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULEdBQUcsRUFBRTtnQkFDSCxXQUFXLEVBQUUsU0FBUztnQkFDdEIsT0FBTyxFQUFFO29CQUNQLGtCQUFrQixFQUFFO3dCQUNsQixNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLGdCQUFnQjt5QkFDdkI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDZixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEVBQUUsRUFBRSxNQUFNO2dCQUNWLFdBQVcsRUFBRSxZQUFZO2dCQUN6QixRQUFRLEVBQUUsSUFBSTtnQkFDZCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFNBQVM7b0JBQ2YsTUFBTSxFQUFFLE9BQU87aUJBQ2hCO2FBQ0Y7U0FDRjtRQUNELFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRTtnQkFDUCxrQkFBa0IsRUFBRTtvQkFDbEIsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxnQkFBZ0I7cUJBQ3ZCO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULEdBQUcsRUFBRTtnQkFDSCxXQUFXLEVBQUUsU0FBUztnQkFDdEIsT0FBTyxFQUFFO29CQUNQLGtCQUFrQixFQUFFO3dCQUNsQixNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLGdCQUFnQjt5QkFDdkI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFBIn0=
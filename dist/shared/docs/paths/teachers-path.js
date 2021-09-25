"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teachersByIdPath = exports.teachersPath = void 0;
exports.teachersPath = {
    post: {
        tags: ['Teachers'],
        summary: 'Professor se autenticar no Quick Dates',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/teacherSignin'
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
                            $ref: '#/schemas/teacherSigninResponse'
                        }
                    }
                }
            }
        }
    },
};
exports.teachersByIdPath = {
    get: {
        tags: ['Teachers'],
        summary: 'Dados do professor',
        security: [
            {
                bearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id do professor',
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
                            $ref: '#/schemas/teacherGetByIdResponse'
                        }
                    }
                }
            }
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlcnMtcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZG9jcy9wYXRocy90ZWFjaGVycy1wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsWUFBWSxHQUFHO0lBQzFCLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUNsQixPQUFPLEVBQUUsd0NBQXdDO1FBQ2pELFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRTtnQkFDUCxrQkFBa0IsRUFBRTtvQkFDbEIsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSx5QkFBeUI7cUJBQ2hDO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULEdBQUcsRUFBRTtnQkFDSCxXQUFXLEVBQUUsU0FBUztnQkFDdEIsT0FBTyxFQUFFO29CQUNQLGtCQUFrQixFQUFFO3dCQUNsQixNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLGlDQUFpQzt5QkFDeEM7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBRztJQUM5QixHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDbEIsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxVQUFVLEVBQUUsRUFBRTthQUNmO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVjtnQkFDRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixFQUFFLEVBQUUsTUFBTTtnQkFDVixXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixRQUFRLEVBQUUsSUFBSTtnQkFDZCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7YUFDRjtTQUNGO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsR0FBRyxFQUFFO2dCQUNILFdBQVcsRUFBRSxTQUFTO2dCQUN0QixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCLEVBQUU7d0JBQ2xCLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsa0NBQWtDO3lCQUN6QztxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUEifQ==
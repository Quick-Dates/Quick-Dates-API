"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsPath = void 0;
exports.studentsPath = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudHMtcGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZG9jcy9wYXRocy9zdHVkZW50cy1wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsWUFBWSxHQUFHO0lBQzFCLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUNsQixPQUFPLEVBQUUsb0NBQW9DO1FBQzdDLFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRTtnQkFDUCxrQkFBa0IsRUFBRTtvQkFDbEIsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSx5QkFBeUI7cUJBQ2hDO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULEdBQUcsRUFBRTtnQkFDSCxXQUFXLEVBQUUsU0FBUztnQkFDdEIsT0FBTyxFQUFFO29CQUNQLGtCQUFrQixFQUFFO3dCQUNsQixNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLGlDQUFpQzt5QkFDeEM7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFBIn0=
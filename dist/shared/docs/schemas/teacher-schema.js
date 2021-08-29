"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherSigninResponseSchema = exports.teacherSigninSchema = void 0;
exports.teacherSigninSchema = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
    }
};
exports.teacherSigninResponseSchema = {
    type: 'object',
    properties: {
        token: {
            type: 'string',
        },
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlci1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2hhcmVkL2RvY3Mvc2NoZW1hcy90ZWFjaGVyLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLG1CQUFtQixHQUFHO0lBQ2pDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRjtDQUNGLENBQUE7QUFDWSxRQUFBLDJCQUEyQixHQUFHO0lBQ3pDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7U0FDZjtLQUNGO0NBQ0YsQ0FBQSJ9
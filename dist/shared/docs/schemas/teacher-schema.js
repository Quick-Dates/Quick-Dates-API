"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherGetByIdResponseSchema = exports.teacherSigninResponseSchema = exports.teacherSigninSchema = void 0;
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
exports.teacherGetByIdResponseSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
        },
        registration: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        fullName: {
            type: 'string',
        },
        email: {
            type: 'string',
        },
        birthDate: {
            type: 'string',
        },
        gender: {
            type: 'string',
            enum: ['M', 'F']
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlci1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2hhcmVkL2RvY3Mvc2NoZW1hcy90ZWFjaGVyLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLG1CQUFtQixHQUFHO0lBQ2pDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRjtDQUNGLENBQUE7QUFDWSxRQUFBLDJCQUEyQixHQUFHO0lBQ3pDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7U0FDZjtLQUNGO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsNEJBQTRCLEdBQUc7SUFDMUMsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDakI7S0FDRjtDQUNGLENBQUEifQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentFeatureErrorSchema = exports.studentGetByIdResponseSchema = exports.studentSigninResponseSchema = exports.studentSigninSchema = void 0;
exports.studentSigninSchema = {
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
exports.studentSigninResponseSchema = {
    type: 'object',
    properties: {
        token: {
            type: 'string',
        },
    }
};
exports.studentGetByIdResponseSchema = {
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
        situation: {
            type: 'string',
        },
        systematicSituation: {
            type: 'string',
        },
        gender: {
            type: 'string',
            enum: ['M', 'F']
        },
        team: {
            $ref: '#/schemas/teamSchema'
        }
    }
};
exports.studentFeatureErrorSchema = {
    type: 'object',
    properties: {
        status: {
            type: 'string',
            enum: ['warn', 'error']
        },
        message: {
            type: 'string',
        },
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2hhcmVkL2RvY3Mvc2NoZW1hcy9zdHVkZW50LXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLG1CQUFtQixHQUFHO0lBQ2pDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRjtDQUNGLENBQUE7QUFDWSxRQUFBLDJCQUEyQixHQUFHO0lBQ3pDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7U0FDZjtLQUNGO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsNEJBQTRCLEdBQUc7SUFDMUMsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNqQjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxzQkFBc0I7U0FDN0I7S0FDRjtDQUNGLENBQUE7QUFFWSxRQUFBLHlCQUF5QixHQUFHO0lBQ3ZDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFFBQVE7U0FDZjtLQUNGO0NBQ0YsQ0FBQSJ9
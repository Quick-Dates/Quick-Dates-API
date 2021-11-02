"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tasks_routes_1 = __importDefault(require("../../modules/Tasks/controllers/tasks.routes"));
var students_routes_1 = __importDefault(require("../../modules/Students/controllers/students.routes"));
var teachers_routes_1 = __importDefault(require("../../modules/Teachers/controllers/teachers.routes"));
var teams_routes_1 = __importDefault(require("../../modules/Teams/controllers/teams.routes"));
var routes = (0, express_1.Router)();
routes.use('/tasks', tasks_routes_1.default);
routes.use('/teachers', teachers_routes_1.default);
routes.use('/students', students_routes_1.default);
routes.use('/teams', teams_routes_1.default);
exports.default = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFpQztBQUVqQyw4RkFBdUU7QUFDdkUsdUdBQWdGO0FBQ2hGLHVHQUFnRjtBQUNoRiw4RkFBdUU7QUFFdkUsSUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsc0JBQVcsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLHlCQUFjLENBQUMsQ0FBQztBQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSx5QkFBYyxDQUFDLENBQUM7QUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsc0JBQVcsQ0FBQyxDQUFDO0FBRWxDLGtCQUFlLE1BQU0sQ0FBQyJ9
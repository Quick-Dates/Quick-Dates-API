"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tasks_routes_1 = __importDefault(require("../../modules/Tasks/routes/tasks.routes"));
var students_routes_1 = __importDefault(require("../../modules/Students/controllers/students.routes"));
var teachers_routes_1 = __importDefault(require("../../modules/Teachers/controllers/teachers.routes"));
var routes = express_1.Router();
routes.use('/tasks', tasks_routes_1.default);
routes.use('/teachers', teachers_routes_1.default);
routes.use('/students', students_routes_1.default);
exports.default = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFpQztBQUVqQyx5RkFBa0U7QUFDbEUsdUdBQWdGO0FBQ2hGLHVHQUFnRjtBQUVoRixJQUFNLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsc0JBQVcsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLHlCQUFjLENBQUMsQ0FBQztBQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSx5QkFBYyxDQUFDLENBQUM7QUFFeEMsa0JBQWUsTUFBTSxDQUFDIn0=
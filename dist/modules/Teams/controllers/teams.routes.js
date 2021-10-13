"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ensureAuthenticated_1 = __importDefault(require("../../../shared/middlewares/ensureAuthenticated"));
var student_1 = __importDefault(require("../../../shared/middlewares/student"));
var teacher_1 = __importDefault(require("../../../shared/middlewares/teacher"));
var StatusTaskService_1 = __importDefault(require("../../Tasks/services/StatusTaskService"));
var TaskService_1 = __importDefault(require("../../Tasks/services/TaskService"));
var CourseService_1 = __importDefault(require("../services/CourseService"));
var TeamService_1 = __importDefault(require("../services/TeamService"));
var teamsRouter = express_1.Router();
teamsRouter.use(ensureAuthenticated_1.default);
teamsRouter.put('/student/:id', student_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, yearCreation, courseName, level, teamService, taskService, statusTaskService, team;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = request.params.id;
                _a = request.body, yearCreation = _a.yearCreation, courseName = _a.courseName, level = _a.level;
                teamService = new TeamService_1.default();
                taskService = new TaskService_1.default();
                statusTaskService = new StatusTaskService_1.default();
                return [4 /*yield*/, teamService.addStudentToTeam(id, yearCreation, courseName, level)];
            case 1:
                team = _b.sent();
                setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var tasks;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, taskService.indexByTeam(team.id)];
                            case 1:
                                tasks = _a.sent();
                                return [4 /*yield*/, statusTaskService.createTasks(id, tasks)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, 1000);
                return [2 /*return*/, response.json(team)];
        }
    });
}); });
teamsRouter.get('/courses', teacher_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var courseService, courses;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                courseService = new CourseService_1.default();
                return [4 /*yield*/, courseService.index()];
            case 1:
                courses = _a.sent();
                return [2 /*return*/, response.json(courses)];
        }
    });
}); });
teamsRouter.get('/:idCurso', teacher_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var idCurso, teamService, teams;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idCurso = request.params.idCurso;
                teamService = new TeamService_1.default();
                return [4 /*yield*/, teamService.getTeamsByCourse(+idCurso)];
            case 1:
                teams = _a.sent();
                return [2 /*return*/, response.json(teams)];
        }
    });
}); });
exports.default = teamsRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbXMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvVGVhbXMvY29udHJvbGxlcnMvdGVhbXMucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlDO0FBQ2pDLHdHQUFrRjtBQUNsRixnRkFBMEQ7QUFDMUQsZ0ZBQTBEO0FBQzFELDZGQUF1RTtBQUN2RSxpRkFBMkQ7QUFDM0QsNEVBQXNEO0FBQ3RELHdFQUFrRDtBQUVsRCxJQUFNLFdBQVcsR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFDN0IsV0FBVyxDQUFDLEdBQUcsQ0FBQyw2QkFBbUIsQ0FBQyxDQUFDO0FBRXJDLFdBQVcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGlCQUFPLEVBQUUsVUFBTyxPQUFPLEVBQUUsUUFBUTs7Ozs7Z0JBQ3ZELEVBQUUsR0FBSyxPQUFPLENBQUMsTUFBTSxHQUFuQixDQUFvQjtnQkFDeEIsS0FBc0MsT0FBTyxDQUFDLElBQUksRUFBaEQsWUFBWSxrQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxLQUFLLFdBQUEsQ0FBa0I7Z0JBQ25ELFdBQVcsR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztnQkFDaEMsV0FBVyxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO2dCQUNoQyxpQkFBaUIsR0FBRyxJQUFJLDJCQUFpQixFQUFFLENBQUM7Z0JBQ3JDLHFCQUFNLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBQTs7Z0JBQTlFLElBQUksR0FBRyxTQUF1RTtnQkFDcEYsVUFBVSxDQUFDOzs7O29DQUNLLHFCQUFNLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFBOztnQ0FBOUMsS0FBSyxHQUFHLFNBQXNDO2dDQUNwRCxxQkFBTSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFBOztnQ0FBOUMsU0FBOEMsQ0FBQzs7OztxQkFDaEQsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDVCxzQkFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDOzs7S0FDNUIsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsaUJBQU8sRUFBRSxVQUFPLE9BQU8sRUFBRSxRQUFROzs7OztnQkFDckQsYUFBYSxHQUFHLElBQUksdUJBQWEsRUFBRSxDQUFDO2dCQUMxQixxQkFBTSxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUE7O2dCQUFyQyxPQUFPLEdBQUcsU0FBMkI7Z0JBQzNDLHNCQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUM7OztLQUMvQixDQUFDLENBQUM7QUFDSCxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxpQkFBTyxFQUFFLFVBQU8sT0FBTyxFQUFFLFFBQVE7Ozs7O2dCQUNwRCxPQUFPLEdBQUssT0FBTyxDQUFDLE1BQU0sUUFBbkIsQ0FBb0I7Z0JBQzdCLFdBQVcsR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztnQkFDeEIscUJBQU0sV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUE7O2dCQUFwRCxLQUFLLEdBQUcsU0FBNEM7Z0JBQzFELHNCQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7OztLQUM3QixDQUFDLENBQUM7QUFFSCxrQkFBZSxXQUFXLENBQUMifQ==
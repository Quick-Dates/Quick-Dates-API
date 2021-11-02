"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var typeorm_1 = require("typeorm");
var AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
var Students_1 = __importDefault(require("../../Students/models/Students"));
var Courses_1 = __importDefault(require("../models/Courses"));
var Teams_1 = __importDefault(require("../models/Teams"));
var CourseService_1 = __importDefault(require("./CourseService"));
var TeamService = /** @class */ (function () {
    function TeamService() {
    }
    TeamService.prototype.addStudentToTeam = function (idStudent, yearCreation, courseName, level) {
        return __awaiter(this, void 0, void 0, function () {
            var teamRepository, courseRepository, studentRepository, courseService, course, team, student;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        teamRepository = (0, typeorm_1.getRepository)(Teams_1.default);
                        courseRepository = (0, typeorm_1.getRepository)(Courses_1.default);
                        studentRepository = (0, typeorm_1.getRepository)(Students_1.default);
                        courseService = new CourseService_1.default();
                        return [4 /*yield*/, courseRepository.findOne({ where: { name: courseName, level: level } })];
                    case 1:
                        course = _a.sent();
                        if (!!course) return [3 /*break*/, 3];
                        return [4 /*yield*/, courseService.create({ name: courseName, level: level })];
                    case 2:
                        course = _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, teamRepository.findOne({ where: { yearCreation: yearCreation, id_course: course.id } })];
                    case 4:
                        team = _a.sent();
                        if (!!team) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.create({ id_course: course.id, yearCreation: yearCreation })];
                    case 5:
                        team = _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, studentRepository.findOne({ where: { id: idStudent } })];
                    case 7:
                        student = _a.sent();
                        if (!student) {
                            throw new AppError_1.default('Aluno não encontrado', 404);
                        }
                        student.id_team = team.id;
                        return [4 /*yield*/, studentRepository.update({ id: student.id }, student)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/, team];
                }
            });
        });
    };
    TeamService.prototype.create = function (_a) {
        var id_course = _a.id_course, yearCreation = _a.yearCreation;
        return __awaiter(this, void 0, void 0, function () {
            var teamRepository, courseRepository, course, yearCurrent, team;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        teamRepository = (0, typeorm_1.getRepository)(Teams_1.default);
                        courseRepository = (0, typeorm_1.getRepository)(Courses_1.default);
                        return [4 /*yield*/, courseRepository.findOne({ where: { id: id_course } })];
                    case 1:
                        course = _b.sent();
                        if (!course) {
                            throw new AppError_1.default('Curso não existe', 404);
                        }
                        yearCurrent = new Date().getFullYear();
                        if (yearCreation > yearCurrent) {
                            throw new AppError_1.default('Ano de criação não pode ser maior que o ano atual', 400);
                        }
                        if (yearCreation < yearCurrent - 3) {
                            throw new AppError_1.default('Ano de criação não pode ser menor que 3 anos', 400);
                        }
                        team = teamRepository.create({
                            yearCreation: yearCreation,
                            course: course,
                            id_course: id_course
                        });
                        return [4 /*yield*/, teamRepository.save(team)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, team];
                }
            });
        });
    };
    TeamService.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var teamRepository, yearCurrent, teams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        teamRepository = (0, typeorm_1.getRepository)(Teams_1.default);
                        yearCurrent = new Date().getFullYear();
                        return [4 /*yield*/, teamRepository.createQueryBuilder()
                                .select("teams")
                                .from(Teams_1.default, "teams")
                                .where("teams.yearCreation <= :yearCurrent AND teams.yearCreation => :yearCurrent - 3", { yearCurrent: yearCurrent })
                                .execute()];
                    case 1:
                        teams = _a.sent();
                        return [2 /*return*/, teams];
                }
            });
        });
    };
    TeamService.prototype.getTeamsByCourse = function (id_course) {
        return __awaiter(this, void 0, void 0, function () {
            var teamRepository, yearCurrent, teams, teamsNotDuplicate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        teamRepository = (0, typeorm_1.getRepository)(Teams_1.default);
                        yearCurrent = new Date().getFullYear();
                        return [4 /*yield*/, teamRepository.createQueryBuilder()
                                .select("*")
                                .from(Teams_1.default, "teams")
                                .where("teams.yearCreation <= :yearCurrent AND teams.yearCreation >= :yearCurrent - 3", { yearCurrent: yearCurrent })
                                .andWhere("teams.id_course = :id_course", { id_course: id_course })
                                .execute()];
                    case 1:
                        teams = _a.sent();
                        teamsNotDuplicate = teams.filter(function (team, index) { return teams.findIndex(function (t) { return t.id === team.id; }) === index; });
                        return [2 /*return*/, teamsNotDuplicate.map(function (team) {
                                return __assign(__assign({}, team), { name: (yearCurrent - team.yearCreation) + 1 + "\u00B0 ano" });
                            })];
                }
            });
        });
    };
    TeamService.prototype.indexById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var teamRepository, team, yearCurrent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        teamRepository = (0, typeorm_1.getRepository)(Teams_1.default);
                        return [4 /*yield*/, teamRepository.findOne({ where: { id: id } })];
                    case 1:
                        team = _a.sent();
                        if (!team) {
                            throw new AppError_1.default('Turma não encontrada', 404);
                        }
                        yearCurrent = new Date().getFullYear();
                        team.name = (yearCurrent - team.yearCreation) + 1 + "\u00B0 ano";
                        return [2 /*return*/, team];
                }
            });
        });
    };
    TeamService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var teamRepository, team;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        teamRepository = (0, typeorm_1.getRepository)(Teams_1.default);
                        return [4 /*yield*/, teamRepository.findOne({ where: { id: id } })];
                    case 1:
                        team = _a.sent();
                        if (!team) {
                            throw new AppError_1.default('Turma não encontrada', 404);
                        }
                        return [4 /*yield*/, teamRepository.delete({ id: id })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, team];
                }
            });
        });
    };
    TeamService.prototype.update = function (id, teamData) {
        return __awaiter(this, void 0, void 0, function () {
            var teamRepository, team;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        teamRepository = (0, typeorm_1.getRepository)(Teams_1.default);
                        return [4 /*yield*/, teamRepository.findOne({ where: { id: id } })];
                    case 1:
                        team = _a.sent();
                        if (!team) {
                            throw new AppError_1.default('Turma não encontrada', 404);
                        }
                        return [4 /*yield*/, teamRepository.update({ id: id }, teamData)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, team];
                }
            });
        });
    };
    TeamService.prototype.indexStudentsByTeam = function (id) {
        var studentRepository = (0, typeorm_1.getRepository)(Students_1.default);
        return studentRepository.find({ where: { id_team: id } });
    };
    return TeamService;
}());
exports.default = TeamService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVhbVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UZWFtcy9zZXJ2aWNlcy9UZWFtU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXdDO0FBQ3hDLDZFQUF1RDtBQUN2RCw0RUFBc0Q7QUFJdEQsOERBQXdDO0FBQ3hDLDBEQUFvQztBQUNwQyxrRUFBNEM7QUFFNUM7SUFBQTtJQXNJQSxDQUFDO0lBcElPLHNDQUFnQixHQUF0QixVQUF1QixTQUFpQixFQUFFLFlBQW9CLEVBQUUsVUFBMEIsRUFBRSxLQUFzQjs7Ozs7O3dCQUMxRyxjQUFjLEdBQUcsSUFBQSx1QkFBYSxFQUFDLGVBQUssQ0FBQyxDQUFDO3dCQUN0QyxnQkFBZ0IsR0FBRyxJQUFBLHVCQUFhLEVBQUMsaUJBQU8sQ0FBQyxDQUFDO3dCQUMxQyxpQkFBaUIsR0FBRyxJQUFBLHVCQUFhLEVBQUMsa0JBQVEsQ0FBQyxDQUFDO3dCQUM1QyxhQUFhLEdBQUcsSUFBSSx1QkFBYSxFQUFFLENBQUM7d0JBRTdCLHFCQUFNLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxPQUFBLEVBQUMsRUFBRSxDQUFDLEVBQUE7O3dCQUE5RSxNQUFNLEdBQUcsU0FBcUU7NkJBQzlFLENBQUMsTUFBTSxFQUFQLHdCQUFPO3dCQUNBLHFCQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsRUFBQTs7d0JBQWhFLE1BQU0sR0FBRyxTQUF1RCxDQUFDOzs0QkFHeEQscUJBQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLFNBQVMsRUFBRSxN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
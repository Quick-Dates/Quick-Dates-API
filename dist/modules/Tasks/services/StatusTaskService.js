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
var SituationTaskEnum_1 = require("../enuns/SituationTaskEnum");
var StatusTasks_1 = __importDefault(require("../models/StatusTasks"));
var Tasks_1 = __importDefault(require("../models/Tasks"));
var StatusTaskService = /** @class */ (function () {
    function StatusTaskService() {
    }
    StatusTaskService.prototype.create = function (_a) {
        var id_student = _a.id_student, id_task = _a.id_task;
        return __awaiter(this, void 0, void 0, function () {
            var statusTaskRepository, statusTask;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        statusTaskRepository = typeorm_1.getRepository(StatusTasks_1.default);
                        statusTask = statusTaskRepository.create({
                            id_student: id_student,
                            id_task: id_task,
                            situation: SituationTaskEnum_1.SituationTaskEnum.EM_ANDAMENTO,
                        });
                        return [4 /*yield*/, statusTaskRepository.save(statusTask)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, statusTask];
                }
            });
        });
    };
    StatusTaskService.prototype.indexTasksByStudent = function (id_student) {
        return __awaiter(this, void 0, void 0, function () {
            var statusTaskRepository, studentRepository, taskRepository, student, statusTasks;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statusTaskRepository = typeorm_1.getRepository(StatusTasks_1.default);
                        studentRepository = typeorm_1.getRepository(Students_1.default);
                        taskRepository = typeorm_1.getRepository(Tasks_1.default);
                        return [4 /*yield*/, studentRepository.findOne({ where: { id: id_student } })];
                    case 1:
                        student = _a.sent();
                        if (!student) {
                            throw new AppError_1.default("Aluno não encontrado", 404);
                        }
                        return [4 /*yield*/, statusTaskRepository.find({
                                where: { id_student: id_student },
                            })];
                    case 2:
                        statusTasks = _a.sent();
                        return [4 /*yield*/, Promise.all(statusTasks.map(function (statusTask) { return __awaiter(_this, void 0, void 0, function () {
                                var task, finalDateTime, currentDateTime;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, taskRepository.findOne({ where: { id: statusTask.id_task } })];
                                        case 1:
                                            task = _a.sent();
                                            if (!task) {
                                                throw new AppError_1.default("Tarefa não encontrada", 404);
                                            }
                                            if (!(statusTask.situation === SituationTaskEnum_1.SituationTaskEnum.EM_ANDAMENTO)) return [3 /*break*/, 3];
                                            finalDateTime = new Date(task.finalDate + " " + task.finalTime);
                                            currentDateTime = new Date();
                                            if (!(currentDateTime > finalDateTime)) return [3 /*break*/, 3];
                                            statusTask.situation = SituationTaskEnum_1.SituationTaskEnum.ATRASADA;
                                            return [4 /*yield*/, statusTaskRepository.update(statusTask.id, statusTask)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            delete task.id_teacher;
                                            return [2 /*return*/, __assign({}, task)];
                                    }
                                });
                            }); }))];
                    case 3:
                        statusTasks = _a.sent();
                        return [2 /*return*/, statusTasks];
                }
            });
        });
    };
    StatusTaskService.prototype.indexSituation = function (id_task, id_student) {
        return __awaiter(this, void 0, void 0, function () {
            var statusTaskRepository, studentRepository, taskRepository, student, task, statusTask, finalDateTime, currentDateTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statusTaskRepository = typeorm_1.getRepository(StatusTasks_1.default);
                        studentRepository = typeorm_1.getRepository(Students_1.default);
                        taskRepository = typeorm_1.getRepository(Tasks_1.default);
                        return [4 /*yield*/, studentRepository.findOne({ where: { id: id_student } })];
                    case 1:
                        student = _a.sent();
                        if (!student) {
                            throw new AppError_1.default("Aluno não encontrado", 404);
                        }
                        return [4 /*yield*/, taskRepository.findOne({ where: { id: id_task } })];
                    case 2:
                        task = _a.sent();
                        if (!task) {
                            throw new AppError_1.default("Tarefa não encontrada", 404);
                        }
                        return [4 /*yield*/, statusTaskRepository.findOne({
                                where: { id_student: id_student, id_task: id_task },
                            })];
                    case 3:
                        statusTask = _a.sent();
                        if (!statusTask) {
                            throw new AppError_1.default("Tarefa do aluno não encontrado", 404);
                        }
                        finalDateTime = new Date(task.finalDate + " " + task.finalTime);
                        currentDateTime = new Date();
                        if (!(currentDateTime > finalDateTime && statusTask.situation === SituationTaskEnum_1.SituationTaskEnum.EM_ANDAMENTO)) return [3 /*break*/, 5];
                        statusTask.situation = SituationTaskEnum_1.SituationTaskEnum.ATRASADA;
                        return [4 /*yield*/, statusTaskRepository.update(statusTask.id, statusTask)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, statusTask.situation];
                }
            });
        });
    };
    StatusTaskService.prototype.updateSituation = function (id_task, id_student, completed) {
        return __awaiter(this, void 0, void 0, function () {
            var statusTaskRepository, studentRepository, taskRepository, student, task, statusTask, finalDateTime, currentDateTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statusTaskRepository = typeorm_1.getRepository(StatusTasks_1.default);
                        studentRepository = typeorm_1.getRepository(Students_1.default);
                        taskRepository = typeorm_1.getRepository(Tasks_1.default);
                        return [4 /*yield*/, studentRepository.findOne({ where: { id: id_student } })];
                    case 1:
                        student = _a.sent();
                        if (!student) {
                            throw new AppError_1.default("Aluno não encontrado", 404);
                        }
                        return [4 /*yield*/, taskRepository.findOne({ where: { id: id_task } })];
                    case 2:
                        task = _a.sent();
                        if (!task) {
                            throw new AppError_1.default("Tarefa não encontrada", 404);
                        }
                        return [4 /*yield*/, statusTaskRepository.findOne({
                                where: { id_student: id_student, id_task: id_task },
                            })];
                    case 3:
                        statusTask = _a.sent();
                        if (!statusTask) {
                            throw new AppError_1.default("Tarefa do aluno não encontrado", 404);
                        }
                        finalDateTime = new Date(task.finalDate + " " + task.finalTime);
                        currentDateTime = new Date();
                        if (completed) {
                            statusTask.situation = SituationTaskEnum_1.SituationTaskEnum.CONCLUIDA;
                        }
                        else if (currentDateTime > finalDateTime) {
                            statusTask.situation = SituationTaskEnum_1.SituationTaskEnum.ATRASADA;
                        }
                        else {
                            statusTask.situation = SituationTaskEnum_1.SituationTaskEnum.EM_ANDAMENTO;
                        }
                        return [4 /*yield*/, statusTaskRepository.update(statusTask.id, statusTask)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, statusTask];
                }
            });
        });
    };
    return StatusTaskService;
}());
exports.default = StatusTaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzVGFza1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UYXNrcy9zZXJ2aWNlcy9TdGF0dXNUYXNrU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXdDO0FBQ3hDLDZFQUF1RDtBQUN2RCw0RUFBc0Q7QUFDdEQsZ0VBQStEO0FBQy9ELHNFQUFnRDtBQUNoRCwwREFBb0M7QUFFcEM7SUFBQTtJQTJIQSxDQUFDO0lBMUhPLGtDQUFNLEdBQVosVUFBYSxFQUE0QjtZQUExQixVQUFVLGdCQUFBLEVBQUUsT0FBTyxhQUFBOzs7Ozs7d0JBQzFCLG9CQUFvQixHQUFHLHVCQUFhLENBQUMscUJBQVcsQ0FBQyxDQUFDO3dCQUVsRCxVQUFVLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDOzRCQUM3QyxVQUFVLFlBQUE7NEJBQ1YsT0FBTyxTQUFBOzRCQUNQLFNBQVMsRUFBRSxxQ0FBaUIsQ0FBQyxZQUFZO3lCQUMxQyxDQUFDLENBQUM7d0JBRUgscUJBQU0sb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBM0MsU0FBMkMsQ0FBQzt3QkFDNUMsc0JBQU8sVUFBVSxFQUFDOzs7O0tBQ25CO0lBRUssK0NBQW1CLEdBQXpCLFVBQTBCLFVBQWtCOzs7Ozs7O3dCQUNwQyxvQkFBb0IsR0FBRyx1QkFBYSxDQUFDLHFCQUFXLENBQUMsQ0FBQzt3QkFDbEQsaUJBQWlCLEdBQUcsdUJBQWEsQ0FBQyxrQkFBUSxDQUFDLENBQUM7d0JBQzVDLGNBQWMsR0FBRyx1QkFBYSxDQUFDLGVBQUssQ0FBQyxDQUFDO3dCQUU1QixxQkFBTSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFB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
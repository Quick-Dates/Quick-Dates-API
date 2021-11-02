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
var NodeMailerService_1 = __importDefault(require("../../../shared/services/NodeMailerService"));
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
                        statusTaskRepository = (0, typeorm_1.getRepository)(StatusTasks_1.default);
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
    StatusTaskService.prototype.createTasks = function (idStudent, tasks) {
        return __awaiter(this, void 0, void 0, function () {
            var statusTaskRepository, statusTasks;
            var _this = this;
            return __generator(this, function (_a) {
                statusTaskRepository = (0, typeorm_1.getRepository)(StatusTasks_1.default);
                statusTasks = Promise.all(tasks.map(function (task) { return __awaiter(_this, void 0, void 0, function () {
                    var statusTask;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, statusTaskRepository.findOne({ where: { id_student: idStudent, id_task: task.id } })];
                            case 1:
                                statusTask = _a.sent();
                                if (!!statusTask) return [3 /*break*/, 3];
                                statusTask = statusTaskRepository.create({
                                    id_student: idStudent,
                                    id_task: task.id,
                                    situation: SituationTaskEnum_1.SituationTaskEnum.EM_ANDAMENTO,
                                });
                                return [4 /*yield*/, statusTaskRepository.save(statusTask)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, statusTask];
                        }
                    });
                }); }));
                return [2 /*return*/, statusTasks];
            });
        });
    };
    StatusTaskService.prototype.createTaskByStudents = function (students, task, teacher) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                students.forEach(function (student) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.create({
                                    id_student: student.id,
                                    id_task: task.id
                                })];
                            case 1:
                                _a.sent();
                                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var nodeMailerService;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                nodeMailerService = new NodeMailerService_1.default();
                                                return [4 /*yield*/, nodeMailerService.sendEmailTaskCreated(student, teacher, task)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, 3000);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
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
                        statusTaskRepository = (0, typeorm_1.getRepository)(StatusTasks_1.default);
                        studentRepository = (0, typeorm_1.getRepository)(Students_1.default);
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
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
                        statusTaskRepository = (0, typeorm_1.getRepository)(StatusTasks_1.default);
                        studentRepository = (0, typeorm_1.getRepository)(Students_1.default);
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
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
                        statusTaskRepository = (0, typeorm_1.getRepository)(StatusTasks_1.default);
                        studentRepository = (0, typeorm_1.getRepository)(Students_1.default);
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzVGFza1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UYXNrcy9zZXJ2aWNlcy9TdGF0dXNUYXNrU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXdDO0FBQ3hDLDZFQUF1RDtBQUN2RCxpR0FBMkU7QUFDM0UsNEVBQXNEO0FBRXRELGdFQUErRDtBQUMvRCxzRUFBZ0Q7QUFDaEQsMERBQW9DO0FBRXBDO0lBQUE7SUEySkEsQ0FBQztJQTFKTyxrQ0FBTSxHQUFaLFVBQWEsRUFBNEI7WUFBMUIsVUFBVSxnQkFBQSxFQUFFLE9BQU8sYUFBQTs7Ozs7O3dCQUMxQixvQkFBb0IsR0FBRyxJQUFBLHVCQUFhLEVBQUMscUJBQVcsQ0FBQyxDQUFDO3dCQUVsRCxVQUFVLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDOzRCQUM3QyxVQUFVLFlBQUE7NEJBQ1YsT0FBTyxTQUFBOzRCQUNQLFNBQVMsRUFBRSxxQ0FBaUIsQ0FBQyxZQUFZO3lCQUMxQyxDQUFDLENBQUM7d0JBRUgscUJBQU0sb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBM0MsU0FBMkMsQ0FBQzt3QkFDNUMsc0JBQU8sVUFBVSxFQUFDOzs7O0tBQ25CO0lBRUssdUNBQVcsR0FBakIsVUFBa0IsU0FBaUIsRUFBRSxLQUFjOzs7OztnQkFDM0Msb0JBQW9CLEdBQUcsSUFBQSx1QkFBYSxFQUFDLHFCQUFXLENBQUMsQ0FBQztnQkFFbEQsV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFPLElBQVc7Ozs7b0NBQ3pDLHFCQUFNLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FB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
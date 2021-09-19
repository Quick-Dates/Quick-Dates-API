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
var Students_1 = __importDefault(require("../models/Students"));
var jsonwebtoken_1 = require("jsonwebtoken");
var StudentService_1 = __importDefault(require("./StudentService"));
var AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
var bcryptjs_1 = require("bcryptjs");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.execute = function (_a) {
        var tokenSuap = _a.tokenSuap, dataStudent = _a.dataStudent, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var studentRepository, student, studentService, keysStudent, hasChange, _i, keysStudent_1, keyStudent, passwordMatched, _b, token;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (dataStudent.tipo_vinculo !== 'Aluno') {
                            throw new AppError_1.default('Perfil de usuário inválido');
                        }
                        studentRepository = typeorm_1.getRepository(Students_1.default);
                        return [4 /*yield*/, studentRepository.findOne({
                                where: { suapId: dataStudent.id }
                            })];
                    case 1:
                        student = _c.sent();
                        if (!!student) return [3 /*break*/, 3];
                        studentService = new StudentService_1.default();
                        return [4 /*yield*/, studentService.create(__assign(__assign({}, dataStudent), { password: password }))];
                    case 2:
                        student = _c.sent();
                        _c.label = 3;
                    case 3:
                        keysStudent = [
                            { student: 'registration', suap: 'matricula' },
                            { student: 'name', suap: 'nome_usual' },
                            { student: 'fullName', suap: 'vinculo', suap2: 'nome' },
                            { student: 'email', suap: 'email' },
                            { student: 'birthDate', suap: 'data_nascimento' },
                            { student: 'situation', suap: 'vinculo', suap2: 'situacao' },
                            { student: 'systematicSituation', suap: 'vinculo', suap2: 'situacao_sistemica' },
                            { student: 'gender', suap: 'sexo' },
                            { student: 'suapId', suap: 'id' },
                        ];
                        hasChange = false;
                        for (_i = 0, keysStudent_1 = keysStudent; _i < keysStudent_1.length; _i++) {
                            keyStudent = keysStudent_1[_i];
                            if (keyStudent.suap2) {
                                if (student[keyStudent.student] != dataStudent[keyStudent.suap][keyStudent.suap2]) {
                                    hasChange = true;
                                    student[keyStudent.student] = dataStudent[keyStudent.suap][keyStudent.suap2];
                                }
                            }
                            else {
                                if (student[keyStudent.student] != dataStudent[keyStudent.suap]) {
                                    hasChange = true;
                                    student[keyStudent.student] = dataStudent[keyStudent.suap];
                                }
                            }
                        }
                        return [4 /*yield*/, bcryptjs_1.compare(password, student.password)];
                    case 4:
                        passwordMatched = _c.sent();
                        if (!!passwordMatched) return [3 /*break*/, 6];
                        hasChange = true;
                        _b = student;
                        return [4 /*yield*/, bcryptjs_1.hash(password, 10)];
                    case 5:
                        _b.password = _c.sent();
                        _c.label = 6;
                    case 6:
                        if (!hasChange) return [3 /*break*/, 8];
                        return [4 /*yield*/, studentRepository.update(student.id, __assign({}, student))];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8:
                        if (student) {
                            token = jsonwebtoken_1.sign({
                                tokenSuap: tokenSuap,
                                id: student.id,
                                name: student.name,
                                profile: 'STUDENT',
                            }, process.env.AUTH_SECRET, {
                                expiresIn: '1d'
                            });
                            return [2 /*return*/, { token: token }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return AuthService;
}());
exports.default = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9TdHVkZW50cy9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXdDO0FBRXhDLGdFQUEwQztBQUMxQyw2Q0FBb0M7QUFDcEMsb0VBQThDO0FBQzlDLDZFQUF1RDtBQUN2RCxxQ0FBeUM7QUFRekM7SUFBQTtJQXFFQSxDQUFDO0lBcEVPLDZCQUFPLEdBQWIsVUFBYyxFQUErQztZQUE5QyxTQUFTLGVBQUEsRUFBRSxXQUFXLGlCQUFBLEVBQUUsUUFBUSxjQUFBOzs7Ozs7d0JBQzdDLElBQUcsV0FBVyxDQUFDLFlBQVksS0FBSyxPQUFPLEVBQUU7NEJBQ3ZDLE1BQU0sSUFBSSxrQkFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUM7eUJBQ2xEO3dCQUNLLGlCQUFpQixHQUFHLHVCQUFhLENBQUMsa0JBQVEsQ0FBQyxDQUFDO3dCQUUvQixxQkFBTSxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7Z0NBQ2pELEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFDOzZCQUNoQyxDQUFDLEVBQUE7O3dCQUZFLE9BQU8sR0FBUSxTQUVqQjs2QkFFRSxDQUFDLE9BQU8sRUFBUix3QkFBUTt3QkFDSixjQUFjLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUM7d0JBRWxDLHFCQUFNLGNBQWMsQ0FBQyxNQUFNLHVCQUFLLFdBQVcsS0FBRSxRQUFRLFVBQUEsSUFBRSxFQUFBOzt3QkFBakUsT0FBTyxHQUFHLFNBQXVELENBQUM7Ozt3QkFHOUQsV0FBVyxHQUFHOzRCQUNsQixFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQzs0QkFDNUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7NEJBQ3JDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7NEJBQ3JELEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDOzRCQUNqQyxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFDOzRCQUMvQyxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDOzRCQUMxRCxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFHLEtBQUssRUFBRSxvQkFBb0IsRUFBQzs0QkFDL0UsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUM7NEJBQ2pDLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDO3lCQUNoQyxDQUFDO3dCQUVFLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBRXRCLFdBQW1DLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTs0QkFBM0IsVUFBVTs0QkFDbEIsSUFBRyxVQUFVLENBQUMsS0FBSyxFQUFFO2dDQUNuQixJQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBZSxDQUFDLEVBQUU7b0NBQzFGLFNBQVMsR0FBRyxJQUFJLENBQUM7b0NBQ2pCLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBZSxDQUFDLENBQUM7aUNBQ3hGOzZCQUNGO2lDQUFNO2dDQUNMLElBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO29DQUM5RCxTQUFTLEdBQUcsSUFBSSxDQUFDO29DQUNqQixPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7aUNBQzVEOzZCQUNGO3lCQUNGO3dCQUN1QixxQkFBTSxrQkFBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBa0IsQ0FBQyxFQUFBOzt3QkFBckUsZUFBZSxHQUFHLFNBQW1EOzZCQUV4RSxDQUFDLGVBQWUsRUFBaEIsd0JBQWdCO3dCQUNqQixTQUFTLEdBQUcsSUFBSSxDQUFDO3dCQUNqQixLQUFBLE9BQU8sQ0FBQTt3QkFBWSxxQkFBTSxlQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFBOzt3QkFBM0MsR0FBUSxRQUFRLEdBQUcsU0FBd0IsQ0FBQzs7OzZCQUczQyxTQUFTLEVBQVQsd0JBQVM7d0JBQ1YscUJBQU0saUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLGVBQU0sT0FBTyxFQUFFLEVBQUE7O3dCQUF4RCxTQUF3RCxDQUFDOzs7d0JBRzNELElBQUcsT0FBTyxFQUFFOzRCQUNKLEtBQUssR0FBRyxtQkFBSSxDQUFDO2dDQUNqQixTQUFTLFdBQUE7Z0NBQ1QsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO2dDQUNkLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtnQ0FDbEIsT0FBTyxFQUFFLFNBQVM7NkJBQ25CLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFxQixFQUFFO2dDQUNwQyxTQUFTLEVBQUUsSUFBSTs2QkFDaEIsQ0FBQyxDQUFDOzRCQUVILHNCQUFPLEVBQUMsS0FBSyxPQUFBLEVBQUMsRUFBQzt5QkFDaEI7Ozs7O0tBRUY7SUFDSCxrQkFBQztBQUFELENBQUMsQUFyRUQsSUFxRUM7QUFFRCxrQkFBZSxXQUFXLENBQUMifQ==
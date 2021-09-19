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
var jsonwebtoken_1 = require("jsonwebtoken");
var AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
var bcryptjs_1 = require("bcryptjs");
var Teachers_1 = __importDefault(require("../models/Teachers"));
var TeacherService_1 = __importDefault(require("./TeacherService"));
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.execute = function (_a) {
        var tokenSuap = _a.tokenSuap, dataTeacher = _a.dataTeacher;
        return __awaiter(this, void 0, void 0, function () {
            var teacherRepository, teacher, teacherService, keysTeacher, hasChange, myDataTeacher, _i, keysTeacher_1, keyTeacher, passwordMatched, _b, token;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (dataTeacher.tipo_vinculo !== 'Servidor' && dataTeacher.vinculo.categoria !== 'docente') {
                            throw new AppError_1.default('Perfil de usuário inválido');
                        }
                        teacherRepository = typeorm_1.getRepository(Teachers_1.default);
                        return [4 /*yield*/, teacherRepository.findOne({
                                where: { suapId: dataTeacher.id }
                            })];
                    case 1:
                        teacher = _c.sent();
                        if (!!teacher) return [3 /*break*/, 3];
                        teacherService = new TeacherService_1.default();
                        return [4 /*yield*/, teacherService.create(dataTeacher)];
                    case 2:
                        teacher = _c.sent();
                        _c.label = 3;
                    case 3:
                        keysTeacher = [
                            { teacher: 'registration', suap: 'matricula' },
                            { teacher: 'name', suap: 'nome_usual' },
                            { teacher: 'fullName', suap: 'vinculo', suap2: 'nome' },
                            { teacher: 'email', suap: 'email' },
                            { teacher: 'birthDate', suap: 'data_nascimento' },
                            { teacher: 'gender', suap: 'sexo' },
                            { teacher: 'suapId', suap: 'id' },
                        ];
                        hasChange = false;
                        myDataTeacher = dataTeacher;
                        for (_i = 0, keysTeacher_1 = keysTeacher; _i < keysTeacher_1.length; _i++) {
                            keyTeacher = keysTeacher_1[_i];
                            if (keyTeacher.suap2) {
                                if (teacher[keyTeacher.teacher] != myDataTeacher[keyTeacher.suap][keyTeacher.suap2]) {
                                    hasChange = true;
                                    teacher[keyTeacher.teacher] = myDataTeacher[keyTeacher.suap][keyTeacher.suap2];
                                }
                            }
                            else {
                                if (teacher[keyTeacher.teacher] != myDataTeacher[keyTeacher.suap]) {
                                    hasChange = true;
                                    teacher[keyTeacher.teacher] = myDataTeacher[keyTeacher.suap];
                                }
                            }
                        }
                        return [4 /*yield*/, bcryptjs_1.compare(dataTeacher.password, teacher.password)];
                    case 4:
                        passwordMatched = _c.sent();
                        if (!!passwordMatched) return [3 /*break*/, 6];
                        hasChange = true;
                        _b = teacher;
                        return [4 /*yield*/, bcryptjs_1.hash(dataTeacher.password, 10)];
                    case 5:
                        _b.password = _c.sent();
                        _c.label = 6;
                    case 6:
                        if (!hasChange) return [3 /*break*/, 8];
                        return [4 /*yield*/, teacherRepository.save(__assign({}, teacher))];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8:
                        if (teacher) {
                            token = jsonwebtoken_1.sign({
                                tokenSuap: tokenSuap,
                                id: teacher.id,
                                name: teacher.name,
                                profile: 'TEACHER',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UZWFjaGVycy9zZXJ2aWNlcy9BdXRoU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXdDO0FBRXhDLDZDQUFvQztBQUNwQyw2RUFBdUQ7QUFDdkQscUNBQXlDO0FBQ3pDLGdFQUEwQztBQUMxQyxvRUFBOEM7QUFHOUM7SUFBQTtJQW9FQSxDQUFDO0lBbkVPLDZCQUFPLEdBQWIsVUFBYyxFQUFxQztZQUFwQyxTQUFTLGVBQUEsRUFBRSxXQUFXLGlCQUFBOzs7Ozs7d0JBQ25DLElBQUcsV0FBVyxDQUFDLFlBQVksS0FBSyxVQUFVLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFOzRCQUN6RixNQUFNLElBQUksa0JBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3lCQUNsRDt3QkFDSyxpQkFBaUIsR0FBRyx1QkFBYSxDQUFDLGtCQUFRLENBQUMsQ0FBQzt3QkFFL0IscUJBQU0saUJBQWlCLENBQUMsT0FBTyxDQUFDO2dDQUNqRCxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBQzs2QkFDaEMsQ0FBQyxFQUFBOzt3QkFGRSxPQUFPLEdBQVEsU0FFakI7NkJBRUUsQ0FBQyxPQUFPLEVBQVIsd0JBQVE7d0JBQ0osY0FBYyxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFDO3dCQUVsQyxxQkFBTSxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBbEQsT0FBTyxHQUFHLFNBQXdDLENBQUM7Ozt3QkFHL0MsV0FBVyxHQUFHOzRCQUNsQixFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQzs0QkFDNUMsRUFBQyxPQUFPLEVB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
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
var typeorm_1 = require("typeorm");
var Courses_1 = __importDefault(require("../models/Courses"));
var CourseService = /** @class */ (function () {
    function CourseService() {
    }
    CourseService.prototype.create = function (_a) {
        var name = _a.name, level = _a.level;
        return __awaiter(this, void 0, void 0, function () {
            var courseRepository, course;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        courseRepository = typeorm_1.getRepository(Courses_1.default);
                        course = courseRepository.create({
                            level: level,
                            name: name,
                        });
                        return [4 /*yield*/, courseRepository.save(course)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, course];
                }
            });
        });
    };
    CourseService.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var courseRepository, cousers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        courseRepository = typeorm_1.getRepository(Courses_1.default);
                        return [4 /*yield*/, courseRepository.find()];
                    case 1:
                        cousers = _a.sent();
                        return [2 /*return*/, cousers];
                }
            });
        });
    };
    CourseService.prototype.indexById = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var courseRepository, course;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        courseRepository = typeorm_1.getRepository(Courses_1.default);
                        return [4 /*yield*/, courseRepository.findOne({ where: { id: id } })];
                    case 1:
                        course = _b.sent();
                        return [2 /*return*/, course];
                }
            });
        });
    };
    return CourseService;
}());
exports.default = CourseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291cnNlU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL1RlYW1zL3NlcnZpY2VzL0NvdXJzZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBd0M7QUFFeEMsOERBQXdDO0FBRXhDO0lBQUE7SUErQkEsQ0FBQztJQTlCTyw4QkFBTSxHQUFaLFVBQWEsRUFBc0I7WUFBckIsSUFBSSxVQUFBLEVBQUUsS0FBSyxXQUFBOzs7Ozs7d0JBQ2pCLGdCQUFnQixHQUFHLHVCQUFhLENBQUMsaUJBQU8sQ0FBQyxDQUFDO3dCQUUxQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOzRCQUNyQyxLQUFLLE9BQUE7NEJBQ0wsSUFBSSxNQUFBO3lCQUNMLENBQUMsQ0FBQzt3QkFFSCxxQkFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFBO3dCQUVuQyxzQkFBTyxNQUFNLEVBQUE7Ozs7S0FDZDtJQUVLLDZCQUFLLEdBQVg7Ozs7Ozt3QkFDUSxnQkFBZ0IsR0FBRyx1QkFBYSxDQUFDLGlCQUFPLENBQUMsQ0FBQzt3QkFHaEMscUJBQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUF2QyxPQUFPLEdBQUcsU0FBNkI7d0JBRTdDLHNCQUFPLE9BQU8sRUFBQTs7OztLQUNmO0lBRUssaUNBQVMsR0FBZixVQUFnQixFQUFTO1lBQVIsRUFBRSxRQUFBOzs7Ozs7d0JBQ1gsZ0JBQWdCLEdBQUcsdUJBQWEsQ0FBQyxpQkFBTyxDQUFDLENBQUM7d0JBR2pDLHFCQUFNLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLEVBQUUsSUFBQSxFQUFDLEVBQUMsQ0FBQyxFQUFBOzt3QkFBdEQsTUFBTSxHQUFHLFNBQTZDO3dCQUU1RCxzQkFBTyxNQUFNLEVBQUE7Ozs7S0FDZDtJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQUVELGtCQUFlLGFBQWEsQ0FBQyJ9
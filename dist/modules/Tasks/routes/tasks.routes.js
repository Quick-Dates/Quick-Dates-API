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
var CreateTaskService_1 = __importDefault(require("../services/CreateTaskService"));
var tasksRouter = express_1.Router();
tasksRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
tasksRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var createTaskService, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                createTaskService = new CreateTaskService_1.default();
                return [4 /*yield*/, createTaskService.execute()];
            case 1:
                tasks = _a.sent();
                response.json(tasks);
                return [2 /*return*/];
        }
    });
}); });
tasksRouter.delete('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
tasksRouter.put('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
exports.default = tasksRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3Mucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvVGFza3Mvcm91dGVzL3Rhc2tzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFpQztBQUNqQyxvRkFBNkQ7QUFFN0QsSUFBTSxXQUFXLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRTdCLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQU8sT0FBTyxFQUFFLFFBQVE7Ozs7S0FFNUMsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBTyxPQUFPLEVBQUUsUUFBUTs7Ozs7Z0JBQ3RDLGlCQUFpQixHQUFHLElBQUksMkJBQWlCLEVBQUUsQ0FBQztnQkFDcEMscUJBQU0saUJBQWlCLENBQUMsT0FBTyxFQUFFLEVBQUE7O2dCQUF6QyxLQUFLLEdBQUcsU0FBaUM7Z0JBQy9DLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Ozs7S0FDckIsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBTyxPQUFPLEVBQUUsUUFBUTs7OztLQUVsRCxDQUFDLENBQUM7QUFFSCxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFPLE9BQU8sRUFBRSxRQUFROzs7O0tBRTVDLENBQUMsQ0FBQztBQUVILGtCQUFlLFdBQVcsQ0FBQyJ9
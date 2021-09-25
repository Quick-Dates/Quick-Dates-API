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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableTasks1632078009361 = void 0;
var createTableTasks1632078009361 = /** @class */ (function () {
    function createTableTasks1632078009361() {
    }
    createTableTasks1632078009361.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"tasks\" (\n        \"id\" SERIAL NOT NULL PRIMARY KEY,\n        \"title\" VARCHAR NOT NULL,\n        \"startDate\" VARCHAR NOT NULL,\n        \"finalDate\" VARCHAR NOT NULL,\n        \"maximumScore\" INTEGER NOT NULL,\n        \"description\" VARCHAR NOT NULL,\n        \"startTime\" VARCHAR NOT NULL,\n        \"finalTime\" VARCHAR NOT NULL,\n        \"subject\" VARCHAR NOT NULL\n      );\n      CREATE TYPE \"situation_tasks_enum\" AS ENUM ('EM_ANDAMENTO', 'CONCLUIDA', 'ATRASADA');\n      CREATE TABLE \"status_tasks\" (\n        \"id\" SERIAL NOT NULL PRIMARY KEY,\n        \"situation\" \"situation_tasks_enum\" NOT NULL,\n        \"id_student\" uuid NOT NULL,\n        \"id_task\" INTEGER NOT NULL,\n        CONSTRAINT \"student_task_fk\" FOREIGN KEY (\"id_student\") REFERENCES \"students\" (id),\n        CONSTRAINT \"task_student_fk\" FOREIGN KEY (\"id_task\") REFERENCES \"tasks\" (id)\n      );\n      ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    createTableTasks1632078009361.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n    DROP TABLE IF EXISTS \"tasks\";\n    DROP TYPE IF EXISTS \"situation_tasks_enum\";\n    DROP TABLE IF EXISTS \"status_tasks\";")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return createTableTasks1632078009361;
}());
exports.createTableTasks1632078009361 = createTableTasks1632078009361;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYzMjA3ODAwOTM2MS1jcmVhdGVUYWJsZVRhc2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9kYXRhYmFzZS9taWdyYXRpb25zLzE2MzIwNzgwMDkzNjEtY3JlYXRlVGFibGVUYXNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO0lBaUNBLENBQUM7SUEvQmMsMENBQUUsR0FBZixVQUFnQixXQUF3Qjs7Ozs0QkFDdEMscUJBQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxtNkJBb0JyQixDQUFDLEVBQUE7O3dCQXBCSixTQW9CSSxDQUFDOzs7OztLQUNOO0lBRVksNENBQUksR0FBakIsVUFBa0IsV0FBd0I7Ozs7NEJBQ3hDLHFCQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsc0lBR2EsQ0FBQyxFQUFBOzt3QkFIdEMsU0FHc0MsQ0FBQzs7Ozs7S0FDeEM7SUFFSCxvQ0FBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksc0VBQTZCIn0=
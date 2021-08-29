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
exports.CreateStudents1628901073999 = void 0;
var typeorm_1 = require("typeorm");
var CreateStudents1628901073999 = /** @class */ (function () {
    function CreateStudents1628901073999() {
    }
    CreateStudents1628901073999.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                                name: "students",
                                columns: [
                                    {
                                        name: 'id',
                                        type: 'uuid',
                                        isPrimary: true,
                                        generationStrategy: 'uuid',
                                        default: 'uuid_generate_v4()'
                                    },
                                    {
                                        name: 'registration',
                                        type: 'bigint',
                                        isUnique: true
                                    },
                                    {
                                        name: 'name',
                                        type: 'varchar',
                                    },
                                    {
                                        name: 'password',
                                        type: 'varchar',
                                    },
                                    {
                                        name: 'email',
                                        type: 'varchar',
                                        isUnique: true
                                    },
                                    {
                                        name: 'birth_date',
                                        type: 'varchar',
                                    },
                                    {
                                        name: 'situation',
                                        type: 'varchar',
                                    },
                                    {
                                        name: 'systematic_situation',
                                        type: 'varchar',
                                    },
                                    {
                                        name: 'gender',
                                        type: 'enum',
                                        enum: ['M', 'F'],
                                    },
                                    {
                                        name: 'suap_id',
                                        type: 'integer',
                                    },
                                ]
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateStudents1628901073999.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropTable("students")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreateStudents1628901073999;
}());
exports.CreateStudents1628901073999 = CreateStudents1628901073999;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYyODkwMTA3Mzk5OS1DcmVhdGVTdHVkZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZGF0YWJhc2UvbWlncmF0aW9ucy8xNjI4OTAxMDczOTk5LUNyZWF0ZVN0dWRlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUErRDtBQUUvRDtJQUFBO0lBaUVBLENBQUM7SUEvRGdCLHdDQUFFLEdBQWYsVUFBZ0IsV0FBd0I7Ozs7NEJBQ3RDLHFCQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsRUFBQTs7d0JBQXJFLFNBQXFFLENBQUM7d0JBRXRFLHFCQUFNLFdBQVcsQ0FBQyxXQUFXLENBQzNCLElBQUksZUFBSyxDQUFDO2dDQUNSLElBQUksRUFBRSxVQUFVO2dDQUNoQixPQUFPLEVBQUU7b0NBQ1A7d0NBQ0UsSUFBSSxFQUFFLElBQUk7d0NBQ1YsSUFBSSxFQUFFLE1BQU07d0NBQ1osU0FBUyxFQUFFLElBQUk7d0NBQ2Ysa0JBQWtCLEVBQUUsTUFBTTt3Q0FDMUIsT0FBTyxFQUFFLG9CQUFvQjtxQ0FDOUI7b0NBQ0Q7d0NBQ0UsSUFBSSxFQUFFLGNBQWM7d0NBQ3BCLElBQUksRUFBRSxRQUFRO3dDQUNkLFFBQVEsRUFBRSxJQUFJO3FDQUNmO29DQUNEO3dDQUNFLElBQUksRUFBRSxNQUFNO3dDQUNaLElBQUksRUFBRSxTQUFTO3FDQUNoQjtvQ0FDRDt3Q0FDRSxJQUFJLEVBQUUsVUFBVTt3Q0FDaEIsSUFBSSxFQUFFLFNBQVM7cUNBQ2hCO29DQUNEO3dDQUNFLElBQUksRUFBRSxPQUFPO3dDQUNiLElBQUksRUFBRSxTQUFTO3dDQUNmLFFBQVEsRUFBRSxJQUFJO3FDQUNmO29DQUNEO3dDQUNFLElBQUksRUFBRSxZQUFZO3dDQUNsQixJQUFJLEVBQUUsU0FBUztxQ0FDaEI7b0NBQ0Q7d0NBQ0UsSUFBSSxFQUFFLFdBQVc7d0NBQ2pCLElBQUksRUFBRSxTQUFTO3FDQUNoQjtvQ0FDRDt3Q0FDRSxJQUFJLEVBQUUsc0JBQXNCO3dDQUM1QixJQUFJLEVBQUUsU0FBUztxQ0FDaEI7b0NBQ0Q7d0NBQ0UsSUFBSSxFQUFFLFFBQVE7d0NBQ2QsSUFBSSxFQUFFLE1BQU07d0NBQ1osSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztxQ0FDakI7b0NBQ0Q7d0NBQ0UsSUFBSSxFQUFFLFNBQVM7d0NBQ2YsSUFBSSxFQUFFLFNBQVM7cUNBQ2hCO2lDQUNGOzZCQUNGLENBQUMsQ0FDSCxFQUFBOzt3QkFwREQsU0FvREMsQ0FBQTs7Ozs7S0FDRjtJQUVZLDBDQUFJLEdBQWpCLFVBQWtCLFdBQXdCOzs7OzRCQUN4QyxxQkFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLEVBQUE7O3dCQUEvRCxTQUErRCxDQUFDO3dCQUNoRSxxQkFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBdkMsU0FBdUMsQ0FBQTs7Ozs7S0FDeEM7SUFFTCxrQ0FBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7QUFqRVksa0VBQTJCIn0=
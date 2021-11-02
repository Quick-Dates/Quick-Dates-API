"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var LevelCourseEnum_1 = require("../enum/LevelCourseEnum");
var TypeCourseEnum_1 = require("../enum/TypeCourseEnum");
var Teams_1 = __importDefault(require("./Teams"));
var Courses = /** @class */ (function () {
    function Courses() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Courses.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            enum: ['INFORMATICA', 'ALIMENTOS', 'SECRETARIADO', 'QUIMICA']
        }),
        __metadata("design:type", String)
    ], Courses.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            enum: ['EMI', 'TADS']
        }),
        __metadata("design:type", String)
    ], Courses.prototype, "level", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Teams_1.default; }, function (teams) { return teams.course; }),
        __metadata("design:type", Array)
    ], Courses.prototype, "teams", void 0);
    Courses = __decorate([
        (0, typeorm_1.Entity)('courses')
    ], Courses);
    return Courses;
}());
exports.default = Courses;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291cnNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL1RlYW1zL21vZGVscy9Db3Vyc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTRFO0FBQzVFLDJEQUEwRDtBQUMxRCx5REFBd0Q7QUFDeEQsa0RBQTRCO0FBRzVCO0lBQUE7SUFrQkEsQ0FBQztJQWhCQztRQURDLElBQUEsZ0NBQXNCLEdBQUU7O3VDQUNkO0lBTVg7UUFKQyxJQUFBLGdCQUFNLEVBQUM7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFHLFNBQVMsQ0FBQztTQUMvRCxDQUFDOzt5Q0FDbUI7SUFNckI7UUFKQyxJQUFBLGdCQUFNLEVBQUM7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7U0FDdEIsQ0FBQzs7MENBQ3FCO0lBR3ZCO1FBREMsSUFBQSxtQkFBUyxFQUFDLGNBQU0sT0FBQSxlQUFLLEVBQUwsQ0FBSyxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sRUFBWixDQUFZLENBQUM7OzBDQUNqQztJQWpCWCxPQUFPO1FBRFosSUFBQSxnQkFBTSxFQUFDLFNBQVMsQ0FBQztPQUNaLE9BQU8sQ0FrQlo7SUFBRCxjQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFFRCxrQkFBZSxPQUFPLENBQUMifQ==
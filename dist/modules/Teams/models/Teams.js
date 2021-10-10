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
var Students_1 = __importDefault(require("../../Students/models/Students"));
var Tasks_1 = __importDefault(require("../../Tasks/models/Tasks"));
var Courses_1 = __importDefault(require("./Courses"));
var Teams = /** @class */ (function () {
    function Teams() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Teams.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Teams.prototype, "yearCreation", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Teams.prototype, "id_course", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Courses_1.default; }),
        typeorm_1.JoinColumn({ name: 'id_course', referencedColumnName: 'id' }),
        __metadata("design:type", Courses_1.default)
    ], Teams.prototype, "course", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Students_1.default; }, function (students) { return students.team; }),
        __metadata("design:type", Array)
    ], Teams.prototype, "students", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Tasks_1.default; }, function (tasks) { return tasks.team; }, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
        __metadata("design:type", Array)
    ], Teams.prototype, "tasks", void 0);
    Teams = __decorate([
        typeorm_1.Entity('teams')
    ], Teams);
    return Teams;
}());
exports.default = Teams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UZWFtcy9tb2RlbHMvVGVhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBNkc7QUFDN0csNEVBQXNEO0FBQ3RELG1FQUE2QztBQUM3QyxzREFBZ0M7QUFHaEM7SUFBQTtJQXFCQSxDQUFDO0lBbkJDO1FBREMsZ0NBQXNCLEVBQUU7O3FDQUNkO0lBR1g7UUFEQyxnQkFBTSxFQUFFOzsrQ0FDWTtJQUtyQjtRQURDLGdCQUFNLEVBQUU7OzRDQUNTO0lBSWxCO1FBRkMsbUJBQVMsQ0FBQyxjQUFNLE9BQUEsaUJBQU8sRUFBUCxDQUFPLENBQUM7UUFDeEIsb0JBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQ3RELGlCQUFPO3lDQUFDO0lBR2hCO1FBREMsbUJBQVMsQ0FBQyxjQUFNLE9BQUEsa0JBQVEsRUFBUixDQUFRLEVBQUUsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFiLENBQWEsQ0FBQzs7MkNBQ2xDO0lBR3JCO1FBREMsbUJBQVMsQ0FBQyxjQUFNLE9BQUEsZUFBSyxFQUFMLENBQUssRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVSxFQUFFLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7O3dDQUMzRTtJQXBCWCxLQUFLO1FBRFYsZ0JBQU0sQ0FBQyxPQUFPLENBQUM7T0FDVixLQUFLLENBcUJWO0lBQUQsWUFBQztDQUFBLEFBckJELElBcUJDO0FBRUQsa0JBQWUsS0FBSyxDQUFDIn0=
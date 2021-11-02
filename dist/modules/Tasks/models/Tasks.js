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
var Teachers_1 = __importDefault(require("../../Teachers/models/Teachers"));
var Teams_1 = __importDefault(require("../../Teams/models/Teams"));
var StatusTasks_1 = __importDefault(require("./StatusTasks"));
var Tasks = /** @class */ (function () {
    function Tasks() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Tasks.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tasks.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tasks.prototype, "startDate", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tasks.prototype, "finalDate", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Tasks.prototype, "maximumScore", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tasks.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tasks.prototype, "startTime", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tasks.prototype, "finalTime", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tasks.prototype, "subject", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tasks.prototype, "id_teacher", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Tasks.prototype, "id_team", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Teachers_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_teacher', referencedColumnName: 'id' }),
        __metadata("design:type", Teachers_1.default)
    ], Tasks.prototype, "teacher", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Teams_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'id_team', referencedColumnName: 'id' }),
        __metadata("design:type", Teams_1.default)
    ], Tasks.prototype, "team", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return StatusTasks_1.default; }, function (statusTask) { return statusTask.task; }, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
        __metadata("design:type", Array)
    ], Tasks.prototype, "statusTasks", void 0);
    Tasks = __decorate([
        (0, typeorm_1.Entity)('tasks')
    ], Tasks);
    return Tasks;
}());
exports.default = Tasks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UYXNrcy9tb2RlbHMvVGFza3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUc7QUFDbkcsNEVBQXNEO0FBQ3RELG1FQUE2QztBQUU3Qyw4REFBd0M7QUFHeEM7SUFBQTtJQThDQSxDQUFDO0lBNUNDO1FBREMsSUFBQSxnQ0FBc0IsR0FBRTs7cUNBQ2Q7SUFHWDtRQURDLElBQUEsZ0JBQU0sR0FBRTs7d0NBQ0s7SUFHZDtRQURDLElBQUEsZ0JBQU0sR0FBRTs7NENBQ1M7SUFHbEI7UUFEQyxJQUFBLGdCQUFNLEdBQUU7OzRDQUNTO0lBR2xCO1FBREMsSUFBQSxnQkFBTSxHQUFFO2tDQUNLLE1BQU07K0NBQUM7SUFHckI7UUFEQyxJQUFBLGdCQUFNLEdBQUU7OzhDQUNXO0lBS3BCO1FBREMsSUFBQSxnQkFBTSxHQUFFOzs0Q0FDUztJQUdsQjtRQURDLElBQUEsZ0JBQU0sR0FBRTs7NENBQ1M7SUFHbEI7UUFEQyxJQUFBLGdCQUFNLEdBQUU7OzBDQUNPO0lBR2hCO1FBREMsSUFBQSxnQkFBTSxHQUFFOzs2Q0FDVztJQUdwQjtRQURDLElBQUEsZ0JBQU0sR0FBRTs7MENBQ087SUFJaEI7UUFGQyxJQUFBLG1CQUFTLEVBQUMsY0FBTSxPQUFBLGtCQUFRLEVBQVIsQ0FBUSxDQUFDO1FBQ3pCLElBQUEsb0JBQVUsRUFBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFDLENBQUM7a0NBQ3BELGtCQUFROzBDQUFDO0lBSWxCO1FBRkMsSUFBQSxtQkFBUyxFQUFDLGNBQU0sT0FBQSxlQUFLLEVBQUwsQ0FBSyxDQUFDO1FBQ3RCLElBQUEsb0JBQVUsRUFBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFDLENBQUM7a0NBQ3BELGVBQUs7dUNBQUM7SUFHWjtRQURDLElBQUEsbUJBQVMsRUFBQyxjQUFNLE9BQUEscUJBQVcsRUFBWCxDQUFXLEVBQUUsVUFBQyxVQUFVLElBQUssT0FBQSxVQUFVLENBQUMsSUFBSSxFQUFmLENBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDOzs4Q0FDOUU7SUE3Q3hCLEtBQUs7UUFEVixJQUFBLGdCQUFNLEVBQUMsT0FBTyxDQUFDO09BQ1YsS0FBSyxDQThDVjtJQUFELFlBQUM7Q0FBQSxBQTlDRCxJQThDQztBQUVELGtCQUFlLEtBQUssQ0FBQyJ9
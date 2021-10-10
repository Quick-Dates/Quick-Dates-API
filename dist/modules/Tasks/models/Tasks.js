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
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Tasks.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tasks.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tasks.prototype, "startDate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tasks.prototype, "finalDate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Tasks.prototype, "maximumScore", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tasks.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tasks.prototype, "startTime", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tasks.prototype, "finalTime", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tasks.prototype, "subject", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Tasks.prototype, "id_teacher", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Tasks.prototype, "id_team", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Teachers_1.default; }),
        typeorm_1.JoinColumn({ name: 'id_teacher', referencedColumnName: 'id' }),
        __metadata("design:type", Teachers_1.default)
    ], Tasks.prototype, "teacher", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Teams_1.default; }),
        typeorm_1.JoinColumn({ name: 'id_team', referencedColumnName: 'id' }),
        __metadata("design:type", Teams_1.default)
    ], Tasks.prototype, "team", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return StatusTasks_1.default; }, function (statusTask) { return statusTask.task; }, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
        __metadata("design:type", Array)
    ], Tasks.prototype, "statusTasks", void 0);
    Tasks = __decorate([
        typeorm_1.Entity('tasks')
    ], Tasks);
    return Tasks;
}());
exports.default = Tasks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UYXNrcy9tb2RlbHMvVGFza3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUc7QUFDbkcsNEVBQXNEO0FBQ3RELG1FQUE2QztBQUU3Qyw4REFBd0M7QUFHeEM7SUFBQTtJQThDQSxDQUFDO0lBNUNDO1FBREMsZ0NBQXNCLEVBQUU7O3FDQUNkO0lBR1g7UUFEQyxnQkFBTSxFQUFFOzt3Q0FDSztJQUdkO1FBREMsZ0JBQU0sRUFBRTs7NENBQ1M7SUFHbEI7UUFEQyxnQkFBTSxFQUFFOzs0Q0FDUztJQUdsQjtRQURDLGdCQUFNLEVBQUU7a0NBQ0ssTUFBTTsrQ0FBQztJQUdyQjtRQURDLGdCQUFNLEVBQUU7OzhDQUNXO0lBS3BCO1FBREMsZ0JBQU0sRUFBRTs7NENBQ1M7SUFHbEI7UUFEQyxnQkFBTSxFQUFFOzs0Q0FDUztJQUdsQjtRQURDLGdCQUFNLEVBQUU7OzBDQUNPO0lBR2hCO1FBREMsZ0JBQU0sRUFBRTs7NkNBQ1c7SUFHcEI7UUFEQyxnQkFBTSxFQUFFOzswQ0FDTztJQUloQjtRQUZDLG1CQUFTLENBQUMsY0FBTSxPQUFBLGtCQUFRLEVBQVIsQ0FBUSxDQUFDO1FBQ3pCLG9CQUFVLENBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBQyxDQUFDO2tDQUNwRCxrQkFBUTswQ0FBQztJQUlsQjtRQUZDLG1CQUFTLENBQUMsY0FBTSxPQUFBLGVBQUssRUFBTCxDQUFLLENBQUM7UUFDdEIsb0JBQVUsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFDLENBQUM7a0NBQ3BELGVBQUs7dUNBQUM7SUFHWjtRQURDLG1CQUFTLENBQUMsY0FBTSxPQUFBLHFCQUFXLEVBQVgsQ0FBVyxFQUFFLFVBQUMsVUFBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLElBQUksRUFBZixDQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQzs7OENBQy9FO0lBN0N2QixLQUFLO1FBRFYsZ0JBQU0sQ0FBQyxPQUFPLENBQUM7T0FDVixLQUFLLENBOENWO0lBQUQsWUFBQztDQUFBLEFBOUNELElBOENDO0FBRUQsa0JBQWUsS0FBSyxDQUFDIn0=
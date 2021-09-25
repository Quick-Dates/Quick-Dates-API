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
        typeorm_1.ManyToOne(function () { return Teachers_1.default; }),
        typeorm_1.JoinColumn({ name: 'id_teacher', referencedColumnName: 'id' }),
        __metadata("design:type", Teachers_1.default)
    ], Tasks.prototype, "teacher", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UYXNrcy9tb2RlbHMvVGFza3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUc7QUFDbkcsNEVBQXNEO0FBRXRELDhEQUF3QztBQUd4QztJQUFBO0lBdUNBLENBQUM7SUFyQ0M7UUFEQyxnQ0FBc0IsRUFBRTs7cUNBQ2Q7SUFHWDtRQURDLGdCQUFNLEVBQUU7O3dDQUNLO0lBR2Q7UUFEQyxnQkFBTSxFQUFFOzs0Q0FDUztJQUdsQjtRQURDLGdCQUFNLEVBQUU7OzRDQUNTO0lBR2xCO1FBREMsZ0JBQU0sRUFBRTtrQ0FDSyxNQUFNOytDQUFDO0lBR3JCO1FBREMsZ0JBQU0sRUFBRTs7OENBQ1c7SUFLcEI7UUFEQyxnQkFBTSxFQUFFOzs0Q0FDUztJQUdsQjtRQURDLGdCQUFNLEVBQUU7OzRDQUNTO0lBR2xCO1FBREMsZ0JBQU0sRUFBRTs7MENBQ087SUFHaEI7UUFEQyxnQkFBTSxFQUFFOzs2Q0FDVztJQUlwQjtRQUZDLG1CQUFTLENBQUMsY0FBTSxPQUFBLGtCQUFRLEVBQVIsQ0FBUSxDQUFDO1FBQ3pCLG9CQUFVLENBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBQyxDQUFDO2tDQUNwRCxrQkFBUTswQ0FBQztJQUdsQjtRQURDLG1CQUFTLENBQUMsY0FBTSxPQUFBLHFCQUFXLEVBQVgsQ0FBVyxFQUFFLFVBQUMsVUFBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLElBQUksRUFBZixDQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQzs7OENBQy9FO0lBdEN2QixLQUFLO1FBRFYsZ0JBQU0sQ0FBQyxPQUFPLENBQUM7T0FDVixLQUFLLENBdUNWO0lBQUQsWUFBQztDQUFBLEFBdkNELElBdUNDO0FBRUQsa0JBQWUsS0FBSyxDQUFDIn0=
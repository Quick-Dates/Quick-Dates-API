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
var SituationTaskEnum_1 = require("../enuns/SituationTaskEnum");
var Tasks_1 = __importDefault(require("./Tasks"));
var StatusTasks = /** @class */ (function () {
    function StatusTasks() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], StatusTasks.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: ['EM_ANDAMENTO', 'CONCLUIDA', 'ATRASADA'],
        }),
        __metadata("design:type", String)
    ], StatusTasks.prototype, "situation", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], StatusTasks.prototype, "id_student", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], StatusTasks.prototype, "id_task", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Students_1.default; }, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
        typeorm_1.JoinColumn({ name: 'id_student', referencedColumnName: 'id' }),
        __metadata("design:type", Students_1.default)
    ], StatusTasks.prototype, "student", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Tasks_1.default; }, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
        typeorm_1.JoinColumn({ name: 'id_task', referencedColumnName: 'id' }),
        __metadata("design:type", Tasks_1.default)
    ], StatusTasks.prototype, "task", void 0);
    StatusTasks = __decorate([
        typeorm_1.Entity('status_tasks')
    ], StatusTasks);
    return StatusTasks;
}());
exports.default = StatusTasks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzVGFza3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UYXNrcy9tb2RlbHMvU3RhdHVzVGFza3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBd0Y7QUFDeEYsNEVBQXNEO0FBQ3RELGdFQUErRDtBQUMvRCxrREFBNEI7QUFHNUI7SUFBQTtJQXVCQSxDQUFDO0lBckJDO1FBREMsZ0NBQXNCLEVBQUU7OzJDQUNkO0lBTVg7UUFKQyxnQkFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztTQUNoRCxDQUFDOztrREFDMkI7SUFHN0I7UUFEQyxnQkFBTSxFQUFFOzttREFDVTtJQUduQjtRQURDLGdCQUFNLEVBQUU7O2dEQUNPO0lBSWhCO1FBRkMsbUJBQVMsQ0FBQyxjQUFNLE9BQUEsa0JBQVEsRUFBUixDQUFRLEVBQUUsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQztRQUNyRSxvQkFBVSxDQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUMsQ0FBQztrQ0FDcEQsa0JBQVE7Z0RBQUM7SUFJbEI7UUFGQyxtQkFBUyxDQUFDLGNBQU0sT0FBQSxlQUFLLEVBQUwsQ0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7UUFDbEUsb0JBQVUsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFDLENBQUM7a0NBQ3BELGVBQUs7NkNBQUM7SUF0QlIsV0FBVztRQURoQixnQkFBTSxDQUFDLGNBQWMsQ0FBQztPQUNqQixXQUFXLENBdUJoQjtJQUFELGtCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUFFRCxrQkFBZSxXQUFXLENBQUMifQ==
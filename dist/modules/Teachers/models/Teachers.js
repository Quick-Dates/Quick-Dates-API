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
var GenderEnum_1 = require("../../../shared/enum/GenderEnum");
var Tasks_1 = __importDefault(require("../../Tasks/models/Tasks"));
var Teachers = /** @class */ (function () {
    function Teachers() {
    }
    __decorate([
        (0, typeorm_1.Column)('uuid', {
            primary: true,
            name: 'id',
            default: function () { return "uuid_generate_v4()"; }
        }),
        __metadata("design:type", String)
    ], Teachers.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Teachers.prototype, "registration", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Teachers.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Teachers.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Teachers.prototype, "fullName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Teachers.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Teachers.prototype, "birthDate", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            enum: ['M', 'F'],
        }),
        __metadata("design:type", String)
    ], Teachers.prototype, "gender", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Teachers.prototype, "suapId", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Tasks_1.default; }, function (tasks) { return tasks.teacher; }),
        __metadata("design:type", Array)
    ], Teachers.prototype, "tasks", void 0);
    Teachers = __decorate([
        (0, typeorm_1.Entity)('teachers')
    ], Teachers);
    return Teachers;
}());
exports.default = Teachers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVhY2hlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UZWFjaGVycy9tb2RlbHMvVGVhY2hlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBb0Q7QUFDcEQsOERBQTZEO0FBQzdELG1FQUE2QztBQUc3QztJQUFBO0lBcUNBLENBQUM7SUEvQkM7UUFMQyxJQUFBLGdCQUFNLEVBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CO1NBQ3BDLENBQUM7O3dDQUNTO0lBR1g7UUFEQyxJQUFBLGdCQUFNLEdBQUU7O2tEQUNZO0lBR3JCO1FBREMsSUFBQSxnQkFBTSxHQUFFOzs4Q0FDUztJQUdsQjtRQURDLElBQUEsZ0JBQU0sR0FBRTs7MENBQ0k7SUFHYjtRQURDLElBQUEsZ0JBQU0sR0FBRTs7OENBQ1E7SUFHakI7UUFEQyxJQUFBLGdCQUFNLEdBQUU7OzJDQUNLO0lBR2Q7UUFEQyxJQUFBLGdCQUFNLEdBQUU7OytDQUNTO0lBTWxCO1FBSkMsSUFBQSxnQkFBTSxFQUFDO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQ2pCLENBQUM7OzRDQUNpQjtJQUduQjtRQURDLElBQUEsZ0JBQU0sR0FBRTs7NENBQ087SUFHaEI7UUFEQyxJQUFBLG1CQUFTLEVBQUMsY0FBTSxPQUFBLGVBQUssRUFBTCxDQUFLLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQzs7MkNBQ2xDO0lBcENYLFFBQVE7UUFEYixJQUFBLGdCQUFNLEVBQUMsVUFBVSxDQUFDO09BQ2IsUUFBUSxDQXFDYjtJQUFELGVBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQUVELGtCQUFlLFFBQVEsQ0FBQyJ9
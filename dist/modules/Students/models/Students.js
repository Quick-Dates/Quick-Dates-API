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
var Teams_1 = __importDefault(require("../../Teams/models/Teams"));
var Students = /** @class */ (function () {
    function Students() {
    }
    __decorate([
        typeorm_1.Column('uuid', {
            primary: true,
            name: 'id',
            default: function () { return "uuid_generate_v4()"; }
        }),
        __metadata("design:type", String)
    ], Students.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Students.prototype, "registration", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Students.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Students.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Students.prototype, "fullName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Students.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Students.prototype, "birthDate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Students.prototype, "situation", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Students.prototype, "systematicSituation", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: ['M', 'F'],
        }),
        __metadata("design:type", String)
    ], Students.prototype, "gender", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Students.prototype, "suapId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Students.prototype, "id_team", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Teams_1.default; }),
        typeorm_1.JoinColumn({ name: 'id_team', referencedColumnName: 'id' }),
        __metadata("design:type", Teams_1.default)
    ], Students.prototype, "team", void 0);
    Students = __decorate([
        typeorm_1.Entity('students')
    ], Students);
    return Students;
}());
exports.default = Students;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R1ZGVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9TdHVkZW50cy9tb2RlbHMvU3R1ZGVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBZ0U7QUFDaEUsOERBQTZEO0FBQzdELG1FQUE2QztBQUc3QztJQUFBO0lBK0NBLENBQUM7SUF6Q0M7UUFMQyxnQkFBTSxDQUFDLE1BQU0sRUFBRTtZQUNkLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQjtTQUNwQyxDQUFDOzt3Q0FDUztJQUdYO1FBREMsZ0JBQU0sRUFBRTs7a0RBQ1k7SUFHckI7UUFEQyxnQkFBTSxFQUFFOzs4Q0FDUztJQUdsQjtRQURDLGdCQUFNLEVBQUU7OzBDQUNJO0lBR2I7UUFEQyxnQkFBTSxFQUFFOzs4Q0FDUTtJQUdqQjtRQURDLGdCQUFNLEVBQUU7OzJDQUNLO0lBR2Q7UUFEQyxnQkFBTSxFQUFFOzsrQ0FDUztJQUdsQjtRQURDLGdCQUFNLEVBQUU7OytDQUNTO0lBR2xCO1FBREMsZ0JBQU0sRUFBRTs7eURBQ21CO0lBTTVCO1FBSkMsZ0JBQU0sQ0FBQztZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNqQixDQUFDOzs0Q0FDaUI7SUFHbkI7UUFEQyxnQkFBTSxFQUFFOzs0Q0FDTztJQUdoQjtRQURDLGdCQUFNLEVBQUU7OzZDQUNRO0lBSWpCO1FBRkMsbUJBQVMsQ0FBQyxjQUFNLE9BQUEsZUFBSyxFQUFMLENBQUssQ0FBQztRQUN0QixvQkFBVSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUMsQ0FBQztrQ0FDcEQsZUFBSzswQ0FBQztJQTlDUixRQUFRO1FBRGIsZ0JBQU0sQ0FBQyxVQUFVLENBQUM7T0FDYixRQUFRLENBK0NiO0lBQUQsZUFBQztDQUFBLEFBL0NELElBK0NDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIn0=
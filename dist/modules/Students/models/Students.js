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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var GenderEnum_1 = require("../../../shared/enum/GenderEnum");
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
    Students = __decorate([
        typeorm_1.Entity('students')
    ], Students);
    return Students;
}());
exports.default = Students;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R1ZGVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9TdHVkZW50cy9tb2RlbHMvU3R1ZGVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBeUM7QUFDekMsOERBQTZEO0FBRzdEO0lBQUE7SUF3Q0EsQ0FBQztJQWxDQztRQUxDLGdCQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CO1NBQ3BDLENBQUM7O3dDQUNTO0lBR1g7UUFEQyxnQkFBTSxFQUFFOztrREFDWTtJQUdyQjtRQURDLGdCQUFNLEVBQUU7OzhDQUNTO0lBR2xCO1FBREMsZ0JBQU0sRUFBRTs7MENBQ0k7SUFHYjtRQURDLGdCQUFNLEVBQUU7OzhDQUNRO0lBR2pCO1FBREMsZ0JBQU0sRUFBRTs7MkNBQ0s7SUFHZDtRQURDLGdCQUFNLEVBQUU7OytDQUNTO0lBR2xCO1FBREMsZ0JBQU0sRUFBRTs7K0NBQ1M7SUFHbEI7UUFEQyxnQkFBTSxFQUFFOzt5REFDbUI7SUFNNUI7UUFKQyxnQkFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQ2pCLENBQUM7OzRDQUNpQjtJQUduQjtRQURDLGdCQUFNLEVBQUU7OzRDQUNNO0lBdkNYLFFBQVE7UUFEYixnQkFBTSxDQUFDLFVBQVUsQ0FBQztPQUNiLFFBQVEsQ0F3Q2I7SUFBRCxlQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUFFRCxrQkFBZSxRQUFRLENBQUMifQ==
import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnIdTeacherInTableTasks1632260010572 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    ALTER TABLE "tasks" ADD COLUMN "id_teacher" uuid;
    ALTER TABLE "tasks" ADD CONSTRAINT "teacher_task_fk" FOREIGN KEY (id_teacher) REFERENCES "teachers" (id);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    ALTER TABLE "tasks" DROP COLUMN "id_teacher";
    `);
  }

}

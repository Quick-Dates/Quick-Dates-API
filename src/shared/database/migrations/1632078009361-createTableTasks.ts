import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableTasks1632078009361 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "tasks" (
        "id" SERIAL NOT NULL PRIMARY KEY,
        "title" VARCHAR NOT NULL,
        "startDate" VARCHAR NOT NULL,
        "finalDate" VARCHAR NOT NULL,
        "maximumScore" INTEGER NOT NULL,
        "description" VARCHAR NOT NULL,
        "startTime" VARCHAR NOT NULL,
        "finalTime" VARCHAR NOT NULL,
        "subject" VARCHAR NOT NULL
      );
      CREATE TYPE "situation_tasks_enum" AS ENUM ('EM_ANDAMENTO', 'CONCLUIDA', 'ATRASADA');
      CREATE TABLE "status_tasks" (
        "id" SERIAL NOT NULL PRIMARY KEY,
        "situation" "situation_tasks_enum" NOT NULL,
        "id_student" uuid NOT NULL,
        "id_task" INTEGER NOT NULL,
        CONSTRAINT "student_task_fk" FOREIGN KEY ("id_student") REFERENCES "students" (id),
        CONSTRAINT "task_student_fk" FOREIGN KEY ("id_task") REFERENCES "tasks" (id)
      );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    DROP TABLE IF EXISTS "tasks";
    DROP TYPE IF EXISTS "situation_tasks_enum";
    DROP TABLE IF EXISTS "status_tasks";`);
  }

}

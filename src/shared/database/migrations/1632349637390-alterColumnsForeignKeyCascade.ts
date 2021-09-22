import {MigrationInterface, QueryRunner} from "typeorm";

export class alterColumnsForeignKeyCascade1632349637390 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      ALTER TABLE "status_tasks" DROP CONSTRAINT "task_student_fk";
      ALTER TABLE "status_tasks" ADD CONSTRAINT "task_student_fk" FOREIGN KEY ("id_task") REFERENCES "tasks" (id)
        ON DELETE CASCADE ON UPDATE CASCADE;
      ALTER TABLE "status_tasks" DROP CONSTRAINT "student_task_fk";
      ALTER TABLE "status_tasks" ADD CONSTRAINT "student_task_fk" FOREIGN KEY ("id_student") REFERENCES "students" (id)
        ON DELETE CASCADE ON UPDATE CASCADE;
      ALTER TABLE "tasks" DROP CONSTRAINT "teacher_task_fk";
      ALTER TABLE "tasks" ADD CONSTRAINT "teacher_task_fk" FOREIGN KEY (id_teacher) REFERENCES "teachers" (id)
        ON DELETE SET NULL ON UPDATE CASCADE;
      ALTER TABLE "students" DROP CONSTRAINT "teamfk";
      ALTER TABLE "students" ADD CONSTRAINT "teamfk" FOREIGN KEY (id_team) REFERENCES teams (id)
        ON DELETE SET NULL ON UPDATE CASCADE;
      ALTER TABLE "teams" DROP CONSTRAINT "teams_id_course_fkey";
      ALTER TABLE "teams" ADD CONSTRAINT "teams_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "courses" ("id")
        ON DELETE CASCADE ON UPDATE CASCADE;
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      ALTER TABLE "teams" DROP CONSTRAINT "teams_id_course_fkey";
      ALTER TABLE "teams" ADD CONSTRAINT "teams_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "courses" ("id");
      ALTER TABLE "students" DROP CONSTRAINT "teamfk";
      ALTER TABLE "students" ADD CONSTRAINT "teamfk" FOREIGN KEY (id_team) REFERENCES teams (id);
      ALTER TABLE "tasks" DROP CONSTRAINT "teacher_task_fk";
      ALTER TABLE "tasks" ADD CONSTRAINT "teacher_task_fk" FOREIGN KEY (id_teacher) REFERENCES "teachers" (id);
      ALTER TABLE "status_tasks" DROP CONSTRAINT "student_task_fk";
      ALTER TABLE "status_tasks" ADD CONSTRAINT "student_task_fk" FOREIGN KEY ("id_student") REFERENCES "students" (id);
      ALTER TABLE "status_tasks" DROP CONSTRAINT "task_student_fk";
      ALTER TABLE "status_tasks" ADD CONSTRAINT "task_student_fk" FOREIGN KEY ("id_task") REFERENCES "tasks" (id);
      `);
    }

}

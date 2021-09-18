import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCourses1631572659533 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      CREATE TYPE "name_course_enum" AS ENUM ('INFORMATICA', 'ALIMENTOS', 'SECRETARIADO' , 'QUIMICA');
      CREATE TYPE "level_course_enum" AS ENUM ('EMI', 'TADS');
      CREATE TABLE courses (
        "id" SERIAL NOT NULL PRIMARY KEY,
        "name" "name_course_enum" NOT NULL UNIQUE,
        "level" "level_course_enum" NOT NULL
      );`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE IF EXISTS "courses";
      DROP TYPE IF EXISTS "name_course_enum";
      DROP TYPE IF EXISTS "level_course_enum";`);
    }

}

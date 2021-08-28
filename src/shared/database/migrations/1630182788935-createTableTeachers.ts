import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableTeachers1630182788935 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      CREATE TYPE gender_enum AS ENUM ('M', 'F');
      CREATE TABLE teachers (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "siap" varchar(50) NOT NULL UNIQUE,
        "password" varchar NOT NULL,
        "name" varchar(40) NOT NULL,
        "fullName" varchar(50),
        "email" varchar NOT NULL UNIQUE,
        "birthDate" varchar(10),
        "situation" varchar NOT NULL,
        "systematicSituation" varchar(40) NOT NULL,
        "gender" gender_enum NOT NULL,
        "suapId" integer NOT NULL UNIQUE
      );`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      DROP TABLE IF EXISTS teachers;
      DROP TYPE IF EXISTS gender_enum;
      `);
    }

}

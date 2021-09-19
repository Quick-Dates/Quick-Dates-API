import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertValuesCourses1631984442759 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
       INSERT INTO "courses" ("name", "level") VALUES ('INFORMATICA', 'EMI');
       INSERT INTO "courses" ("name", "level") VALUES ('ALIMENTOS', 'EMI');
       INSERT INTO "courses" ("name", "level") VALUES ('SECRETARIADO', 'EMI');
       INSERT INTO "courses" ("name", "level") VALUES ('QUIMICA', 'EMI');
       `

      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      DELETE FROM "courses" WHERE "name" IN ('INFORMATICA', 'ALIMENTOS', 'SECRETARIADO', 'QUIMICA');
      `);
    }

}

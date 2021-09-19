import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableTeams1631983440333 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE TABLE "teams" (
        "id" SERIAL NOT NULL PRIMARY KEY,
        "yearCreation" INTEGER NOT NULL,
        "id_course" integer NOT NULL,
        FOREIGN KEY ("id_course") REFERENCES "courses" ("id")
        );`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE "teams";`);
    }

}

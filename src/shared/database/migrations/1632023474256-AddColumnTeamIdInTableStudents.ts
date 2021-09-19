import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnTeamIdInTableStudents1632023474256 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "students" ADD COLUMN "id_team" integer;
      ALTER TABLE "students" ADD CONSTRAINT teamfk FOREIGN KEY (id_team) REFERENCES teams (id);
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT teamfk;
      ALTER TABLE "students" DROP COLUMN "id_team";
      `);
    }

}

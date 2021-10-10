import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnIdTeamInTableTask1633889262822 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "tasks" ADD COLUMN "id_team" integer;
      ALTER TABLE "tasks" ADD CONSTRAINT team_task_fk FOREIGN KEY (id_team) REFERENCES teams (id)
        ON DELETE CASCADE ON UPDATE CASCADE;
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      ALTER TABLE "tasks" DROP COLUMN "id_team";
      `);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class alterColumnMaximumScoreInTableTask1634079680632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "maximumScore" TYPE real`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "maximumScore" TYPE integer`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class alterColumnVarcharFromDate1634407874004 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "startDate" TYPE DATE using ("startDate"::text::date);
      ALTER TABLE "tasks" ALTER COLUMN "finalDate" TYPE DATE using ("finalDate"::text::date);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "finalDate" TYPE VARCHAR;
      ALTER TABLE "tasks" ALTER COLUMN "startDate" TYPE VARCHAR;`);
    }

}

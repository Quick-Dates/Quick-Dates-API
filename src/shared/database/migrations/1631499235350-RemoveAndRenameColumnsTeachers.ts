import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveAndRenameColumnsTeachers1631499235350 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "teachers" DROP COLUMN IF EXISTS  "situation";
      ALTER TABLE "teachers" DROP COLUMN IF EXISTS "systematicSituation";
      ALTER TABLE "teachers" RENAME COLUMN "siap" TO "registration"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "teachers" ADD COLUMN "situation" varchar NOT NULL;
      ALTER TABLE "teachers" ADD COLUMN "systematicSituation" varchar(40) NOT NULL;
      ALTER TABLE "teachers" RENAME COLUMN "registration" TO "siap"`);
    }

}

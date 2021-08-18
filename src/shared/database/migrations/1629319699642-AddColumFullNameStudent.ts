import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumFullNameStudent1629319699642 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE students ADD COLUMN full_name varchar(50)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE students DROP COLUMN IF EXISTS full_name`);
    }

}

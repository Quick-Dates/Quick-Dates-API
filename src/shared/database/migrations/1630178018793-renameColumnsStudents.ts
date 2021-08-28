import {MigrationInterface, QueryRunner} from "typeorm";

export class renameColumnsStudents1630178018793 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      ALTER TABLE students RENAME COLUMN "birth_date" TO "birthDate";
      ALTER TABLE students RENAME COLUMN "systematic_situation" TO "systematicSituation";
      ALTER TABLE students RENAME COLUMN "suap_id" TO "suapId";
      ALTER TABLE students RENAME COLUMN "full_name" TO "fullName";
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      ALTER TABLE students RENAME COLUMN "birthDate" TO "birth_date";
      ALTER TABLE students RENAME COLUMN "systematicSituation" TO "systematic_situation";
      ALTER TABLE students RENAME COLUMN "suapId" TO "suap_id";
      ALTER TABLE students RENAME COLUMN "fullName" TO "full_name";
      `);
    }

}

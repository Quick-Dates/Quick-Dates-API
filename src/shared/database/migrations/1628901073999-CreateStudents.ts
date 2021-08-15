import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStudents1628901073999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

      await queryRunner.createTable(
        new Table({
          name: "students",
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'registration',
              type: 'bigint',
              isUnique: true
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'password',
              type: 'varchar',
            },
            {
              name: 'email',
              type: 'varchar',
              isUnique: true
            },
            {
              name: 'birth_date',
              type: 'varchar',
            },
            {
              name: 'situation',
              type: 'varchar',
            },
            {
              name: 'systematic_situation',
              type: 'varchar',
            },
            {
              name: 'gender',
              type: 'enum',
              enum: ['M', 'F'],
            },
            {
              name: 'suap_id',
              type: 'integer',
            },
          ]
        }),
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp"');
      await queryRunner.dropTable("students")
    }

}

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePatenteTable1643561324702 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_patente',
            columns: [

            {
                name: 'id',
                type: 'serial',
                isPrimary: true
            },
            {
                name: 'nome',
                type: 'varchar(100)',
                isNullable: false
            },
            {
                name: 'cor',
                type: 'varchar(100)',
                isNullable: true
            }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_patente')
    }

}

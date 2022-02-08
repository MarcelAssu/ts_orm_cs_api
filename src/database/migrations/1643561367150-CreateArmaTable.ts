import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateArma1643561367150 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_arma',
            columns:[
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'nome',
                    type: 'varchar(100)',
                    isNullable: true
                },
                {
                    name: 'peso',
                    type: 'numeric(7,2)',
                    isNullable: true,
                    default: 0
                },
                {
                    name: 'valor',
                    type: 'numeric(7,2)',
                    isNullable: true,
                    default: 0
                },
                {
                    name: 'comprimento_cano',
                    type: 'numeric(7,2)',
                    isNullable: true
                },
                {
                    name: 'type',
                    type: 'varchar',
                    isNullable: true
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_arma')
    }

}

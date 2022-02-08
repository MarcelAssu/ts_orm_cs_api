import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateArmaMunicaoTable1643561400453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_arma_municao',
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
                    name: 'explosivo',
                    type: 'boolean',
                    isNullable: true,
                },
                {
                    name: 'Calibre',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'arma_id',
                    type:'int',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        /*await queryRunner.createForeignKey(
            'tb_arma_municao',
            new TableForeignKey({
                name: 'fk_arma_municao_a',
                columnNames: ['arma_id'],
                referencedTableName: 'tb_arma',
                referencedColumnNames: ['id']
            })
        );
        await queryRunner.createForeignKey(
            'tb_arma_municao',
            new TableForeignKey({
                name: 'fk_tb_arma_municao_m',
                columnNames: ['municao_id'],
                referencedTableName: 'tb_artefato',
                referencedColumnNames: ['id']
            })
        );*/
        //await queryRunner.dropForeignKey('tb_arma_municao', "fk_arma_municao_a");
        //await queryRunner.dropForeignKey('tb_arma_municao', "fk_tb_arma_municao_m");
        await queryRunner.createForeignKey(
            'tb_arma_municao',
            new TableForeignKey({
                name: 'fk_arma_municao',
                columnNames: ['arma_id'],
                referencedTableName: 'tb_arma',
                referencedColumnNames: ['id']
            })
        );
        await queryRunner.dropForeignKey('tb_arma_municao', "fk_arma_municao");
        await queryRunner.dropTable('tb_arma_municao');
    }

}

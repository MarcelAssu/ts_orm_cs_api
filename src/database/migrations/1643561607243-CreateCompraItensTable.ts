import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompraItensTable1643561607243 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_compra_itens',
            columns:[
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'quantidade',
                    type: 'numeric(10,2)',
                    isNullable: true,
                    default: 0
                },
                {
                    name: 'valor',
                    type: 'numeric(10,2)',
                    isNullable: true,
                    default: 0
                },
                {
                    name: 'compra_id',
                    type: 'int',
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'tb_compra_itens',
            new TableForeignKey({
                name: 'fk_compraitens_compra',
                columnNames: ['compra_id'],
                referencedTableName: 'tb_compra',
                referencedColumnNames: ['id']
            })
        );
        await queryRunner.dropForeignKey('tb_compra_itens', 'fk_compraitens_compra');
        await queryRunner.dropTable('tb_compra_itens');
    }

}

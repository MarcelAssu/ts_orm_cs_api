import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePartidaTable1643561485083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_partida',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'comeco',
                    type: 'timestamp',
                    isNullable: true,
                    default: 'now()'
                },
                {
                    name: 'fim',
                    type: 'timestamp',
                    isNullable: true,
                },
                {
                    name: 'jogador_nickname',
                    type: 'varchar(10)',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'tb_partida',
            new TableForeignKey({
                name: 'fk_partida_jogador',
                columnNames: ['jogador_nickname'],
                referencedTableName: 'tb_jogador',
                referencedColumnNames: ['nickname']
            })
        );
        await queryRunner.dropForeignKey('tb_partida', "fk_partida_jogador");
        await queryRunner.dropTable('tb_partida');
    }

}

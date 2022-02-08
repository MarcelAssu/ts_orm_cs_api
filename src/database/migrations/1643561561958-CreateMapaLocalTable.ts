import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateMapaLocalTable1643561561958 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_mapa_local',
            columns: [
                {
                    name: 'local_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'mapa_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'tb_mapa_local',
            new TableForeignKey({
                name: 'fk_mapa_local_m',
                columnNames: ['mapa_id'],
                referencedTableName: 'tb_mapa',
                referencedColumnNames: ['id']
            })
        );
        await queryRunner.createForeignKey(
            'tb_mapa_local',
            new TableForeignKey({
                name: 'fk_mapa_local_l',
                columnNames: ['local_id'],
                referencedTableName: 'tb_local',
                referencedColumnNames: ['id']
            })
        );
        await queryRunner.dropForeignKey('tb_mapa_local', "fk_mapa_local_m");
        await queryRunner.dropForeignKey('tb_mapa_local', "fk_mapa_local_l");
        await queryRunner.dropTable('tb_mapa_local')
    }

}

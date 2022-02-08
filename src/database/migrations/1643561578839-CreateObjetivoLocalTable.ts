import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateObjetivoLocalTable1643561578839 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_objetivo_local',
            columns:[
                {
                    name: 'objetivo_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'local_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'tb_objetivo_local',
            new TableForeignKey({
                name: 'fk_objetivo_local_o',
                columnNames: ['objetivo_id'],
                referencedTableName: 'tb_objetivo',
                referencedColumnNames: ['id']
            })
        );
        await queryRunner.createForeignKey(
            'tb_objetivo_local',
            new TableForeignKey({
                name: 'fk_objetivo_local_l',
                columnNames: ['local_id'],
                referencedTableName: 'tb_local',
                referencedColumnNames: ['id']
            })
        );
        await queryRunner.dropForeignKey('tb_objetivo_local', "fk_objetivo_local_o");
        await queryRunner.dropForeignKey('tb_objetivo_local', "fk_objetivo_local_l");
        await queryRunner.dropTable('tb_objetivo_local');
    }

}

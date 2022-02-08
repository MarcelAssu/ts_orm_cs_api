import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity('tb_patent')
class Patent{
    @PrimaryColumn('int')
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    color: string;
}
export default Patent;
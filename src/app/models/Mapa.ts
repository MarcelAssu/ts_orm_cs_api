import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import Local from "./Local";

@Entity('tb_map')
class Map{
    @PrimaryColumn('int')
    id: number;

    @Column('text')
    name: string;

    @OneToMany(() => Local, local => local.map)
    locals: Local[];
}
export default Map;
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import Map from "./Mapa";
import Objective from "./Objetivo";

@Entity('tb_local')
class Local{
    @PrimaryColumn('int')
    id: number;

    @Column('text')
    name: string;

    @Column("varchar")
    latitude: string;
    
    @Column("varchar")
    longitude: string;

    @ManyToOne(() => Map, map => map.locals)
    map: Map;

    @ManyToOne(() => Objective, objective => objective.locals)
    objective: Objective;
/*
    @ManyToOne(type => Map)
    @JoinColumn({name: "map_id", referencedColumnName: "id"})
    map: Map;

    @ManyToOne(type => Objective)
    @JoinColumn({name: "objective_id", referencedColumnName: "id"})
    objective: Objective;
    */
}
export default Local;
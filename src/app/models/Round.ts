import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import Match from './Partida';
import Objective from './Objetivo';
import { Mode } from "./Mode";

@Entity('tb_round')
export default class Round{
    @PrimaryColumn('int')
    id:number;

    @Column()
    number: number;

    @Column('timestamp')
    begin: Date;

    @Column('timestamp')
    end: Date;

    @Column({
        type: "enum",
        enum: Mode,
    })
    mode:Mode;

    @ManyToMany(type => Match)
    @JoinColumn({name: "match_id", referencedColumnName: "id"})
    match:Match;

    @ManyToMany(() => Objective)
    @JoinTable({name: "tb_round_objective", joinColumn:{name:"round_id", referencedColumnName: "id"}, inverseJoinColumn:{name:"objective_id", referencedColumnName:"id"}})
    objectives:Objective[];
}
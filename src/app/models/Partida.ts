import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import Player from "./Jogador";
import Round from "./Round";

@Entity('tb_match')
export default class Match{
    @PrimaryColumn('int')
    id: number;

    @Column('timestamp')
    begin: Date;

    @Column('timestamp')
    end: Date;

    @ManyToOne(type => Player)
    @JoinColumn({name: "player_nickname", referencedColumnName: "nickname"})
    player:Player;

    @OneToMany(() => Round, round => round.match)
    rounds:Round[];
}
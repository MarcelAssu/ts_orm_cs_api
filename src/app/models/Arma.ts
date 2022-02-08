import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable, ChildEntity } from "typeorm";
//import Artefato from "./Artefato";
//import Municao from "./Municao";
import {Type} from './Type';

@Entity("tb_arma")
export default class Arma {//extends Artefato{
    @PrimaryColumn('int')
    id: number;

    @Column('text')
    nome: string;

    @Column()
    peso: number;

    @Column()
    valor: number;

    @Column()
    comprimento_cano: number;

    @Column({
        type: "enum",
        enum: Type,
    })
    type:Type;

    /*@ManyToMany(() => Municao)
    @JoinTable({name: "tb_arma_municao", joinColumn: {name: "arma_id", referencedColumnName: "id"}, inverseJoinColumn: {name: "municao_id", referencedColumnName: "id"}})
    municao: Municao[];*/
}
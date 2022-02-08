import { Entity, Column, PrimaryColumn, ChildEntity, ManyToOne, JoinColumn } from "typeorm";
import {Calibre} from './Calibre';
import Arma from './Arma'

@Entity('tb_arma_municao')
export default class Municao{
    @PrimaryColumn('int')
    id: number;

    @Column('text')
    nome: string;

    @Column()
    peso: number;

    @Column()
    valor: number;
    
    @Column()
    explosivo: boolean;
    
    @Column({
        type: "enum",
        enum: Calibre,
    })
    Calibre:Calibre;
    
    @Column()
    arma_id: number
    //@ManyToOne(type => Arma)
    //@JoinColumn({name: "arma_id", referencedColumnName: "id"})
    //arma_id: Arma;
}
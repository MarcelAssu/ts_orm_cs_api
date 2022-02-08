import { JoinColumn, Column, ManyToOne } from "typeorm";
import Round from "./Round";
import Objective from "./Objetivo";

export class ResultID{
    @ManyToOne(type => Round, {primary: true})
    @JoinColumn({name: "round_id", referencedColumnName: "id"})
    round:Round;

    @ManyToOne(type => Objective, {primary: true})
    @JoinColumn({name: "objective_id", referencedColumnName: "id"})
    objective: Objective;
}
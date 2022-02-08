import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import Local from "./Local";

@Entity('tb_objective')
class Objective{
    @PrimaryColumn('int')
    id: number;

    @Column("varchar", {length: 200})
    description: string;

    @Column()
    points: number;

    @OneToMany(() => Local, local => local.objective)
    locals: Local[];
}
export default Objective;
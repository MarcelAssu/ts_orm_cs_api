import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('tb_address')
class Address{
    @PrimaryColumn('int')
    id: number;

    @Column("varchar", {length: 8})
    cep: string;

    @Column("varchar", {length: 100, nullable: true})
    complemento: string;
}
export default Address;
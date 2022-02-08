import {Entity, Column, PrimaryColumn, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import Player from './Jogador';
import Purchaseitems from './CompraItens';

@Entity('tb_purchase')
class Purchase{
    @PrimaryColumn('int')
    id: number;

    @Column('timestamp')
    data: Date;

    @Column()
    total: number;

    @ManyToOne(type => Player)
    @JoinColumn({name: "player_nickname", referencedColumnName: "nickname"})
    player: Player;

    @OneToMany(() => Purchaseitems, purchaseitems => purchaseitems.purchase)
    purchaseitems: Purchaseitems[];
}
export default Purchase;
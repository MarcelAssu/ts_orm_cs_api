import { Request, Response } from "express";
import {getRepository} from 'typeorm';
import Player from "../models/Jogador";
import Address  from "../models/Endereco";
class PlayerController{
    async delete(req: Request, res: Response){
        const repository = getRepository(Player);
        const{nickname, address} = req.body;
        const nicknameExists = await repository.findOne({where: {nickname}});

        if(nicknameExists){
            await repository.remove(nickname);
            return res.sendStatus(204);
        }else{
            return res.sendStatus(404);
        }   
    }
    async store(req: Request, res: Response){
        const repository = getRepository(Player);
        const {nickname, address} = req.body;
        const nicknameExists = await repository.findOne({where: {nickname}});
        if(nicknameExists){
            return res.sendStatus(409);
        }
        if(!address){
            return res.sendStatus(404);
        }
        const j = repository.create(req.body);
        await repository.save(j);
        return res.json(j)
    }
    async update(req: Request, res: Response){
        const repository = getRepository(Player);
        const{nickname, address} = req.body;
        const nicknameExists = await repository.findOne({where: {nickname}});
        const addressExists = await getRepository(Address).findOne({where: {"id": address.id}});
        if(!address || !nicknameExists || !addressExists){
            return res.sendStatus(404);
        }
        const j = repository.create(req.body);
        await repository.save(j);
        return res.json(j)
    }
    async list(req: Request, res: Response){
        const repository = getRepository(Player);
        const list = await repository.createQueryBuilder('tb_player').innerJoinAndSelect("tb_player.address", "address").leftJoinAndSelect("tb_player.patents", "patent").getMany();
        return res.json(list);
    }
}
export default new PlayerController();
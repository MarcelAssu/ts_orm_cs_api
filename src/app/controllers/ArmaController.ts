import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Jogador from "../models/Jogador";
import Arma from "../models/Arma";
//import Municao from "../models/Municao";

class ArmaController{
    async list(req: Request, res: Response){
        const repository = getRepository(Arma);
        const lista = await repository.find();
        return res.json(lista);
    }
    async store(req: Request, res: Response){
        const repository = getRepository(Arma);
        const j = repository.create(req.body);
        await repository.save(j);
        console.log("Arma adicionada com sucesso! Id: " + req.body.id)
        return res.json(j)
    }
    async delete(req: Request, res: Response){
        const repository = getRepository(Arma);
        const ID = req.body.id;
        const idExists = await repository.findOne({where: { id: ID }});

        if(idExists){
            await repository.remove(idExists);
            console.log("Arma deletada com sucesso! Id: " + ID)
            return res.sendStatus(204);
        } else{
            return res.sendStatus(404);
        }   
    }
}
export default new ArmaController();
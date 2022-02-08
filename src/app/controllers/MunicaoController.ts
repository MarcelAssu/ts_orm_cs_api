import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Municao from "../models/Municao";
//import Municao from "../models/Municao";

class MunicaoController{
    async list(req: Request, res: Response){
        const repository = getRepository(Municao);
        const lista = await repository.find();
        return res.json(lista);
    }
    async store(req: Request, res: Response){
        const repository = getRepository(Municao);
        const j = repository.create(req.body);
        await repository.save(j);
        console.log("Munição adicionada com sucesso! Id: " + req.body.id)
        return res.json(j)
    }
    async delete(req: Request, res: Response){
        const repository = getRepository(Municao);
        const ID = req.body.id;
        const idExists = await repository.findOne({where: { id: ID }});

        if(idExists){
            await repository.remove(idExists);
            console.log("Munição deletada com sucesso! Id: " + ID)
            return res.sendStatus(204);
        } else{
            return res.sendStatus(404);
        }   
    }
}
export default new MunicaoController();
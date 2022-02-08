import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Match from "../models/Partida";

class MatchController{
    async list(req: Request, res: Response){
        const repository = getRepository(Match);
        const list = await repository.find();
        return res.json(list);
    }

    async store(req: Request, res: Response){
        const repository = getRepository(Match);
        const j = repository.create(req.body);
        await repository.save(j);
        return res.json(j);
    }
}
export default new MatchController();
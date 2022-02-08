import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Objective from "../models/Objetivo";

class ObjectiveController{
    async list(req: Request, res: Response){
        const repository = getRepository(Objective);
        const list = await repository.find();
        return res.json(list);
    }
    async store(req: Request, res: Response){
        const repository = getRepository(Objective);
        const j = repository.create(req.body);
        await repository.save(j);
        return res.json(j);
    }
}
export default new ObjectiveController();
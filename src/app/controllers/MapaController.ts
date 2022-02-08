import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Map from "../models/Mapa";

class MapController{
    async list(req: Request, res: Response){
        const repository = getRepository(Map);
        const list = await repository.find();
        return res.json(list);
    }
    async store(req: Request, res: Response){
        const repository = getRepository(Map);
        const j = repository.create(req.body);
        await repository.save(j);
        return res.json(j);
    }
}
export default new MapController();
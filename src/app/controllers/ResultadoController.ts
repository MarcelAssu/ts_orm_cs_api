import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Result from "../models/Resultado";

class ResultController{
    async list(req: Request, res: Response){
        const repository = getRepository(Result);
        const list = await repository.find();
        console.log(list);
        return res.json(list);
    }
    /*"id": {
        "round": {"id": 1}, "objective": {"id": 1}, "status": "SIM"
    } */
    async store(req: Request, res: Response){
        const repository = getRepository(Result);
        const j = repository.create(req.body);
        console.log(j);
        await repository.save(j);
        return res.json(j);
    }
}
export default new ResultController();
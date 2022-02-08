import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Purchase from '../models/Compra';

class PurchaseController{
    async list(req: Request, res: Response){
        const repository = getRepository(Purchase);
        const lista = await repository.find();
        return res.json(lista);
    }
    async store(req: Request, res: Response){
        const repository = getRepository(Purchase);
        const j = repository.create(req.body);
        await repository.save(j);
        return res.json(j);
    }
}
export default new PurchaseController();
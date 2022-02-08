import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import Purchaseitems from "../models/CompraItens";

class PurchaseItemsController{
    async list(req: Request, res: Response){
        const repository = getRepository(Purchaseitems);
        const list = await repository.find();
        return res.json(list);
    }
    async store(req: Request, res: Response){
        const repository = getRepository(Purchaseitems);
        const j = repository.create(req.body);
        await repository.save(j);
        return res.json(j);
    }
}
export default new PurchaseItemsController();
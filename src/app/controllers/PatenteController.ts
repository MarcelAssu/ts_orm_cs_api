import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Patent from '../models/Patente';

class PatentController{
    async list(req: Request, res: Response){
        const repository = getRepository(Patent);
        const list = await repository.find();
        return res.json(list);
    }
    async store(req: Request, res: Response){
        const repository = getRepository(Patent);
        const j = repository.create(req.body);
        await repository.save(j);
        return res.json(j);
    }
}
export default new PatentController();
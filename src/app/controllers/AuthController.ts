import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Jogador from "../models/Jogador";
import jwt from 'jsonwebtoken';

class AuthController{
    async authenticate(req: Request, res: Response){
        const repository = getRepository(Jogador)
        const {nickname, password} = req.body;
        const playerExists = await repository.findOne({where: {nickname}});
        if(!playerExists){
            return res.sendStatus(401);
        }
        if(playerExists.password == password){
            const token = jwt.sign({id: playerExists.nickname}, 'minha_chave_secreta', {expiresIn: '1d'});
            playerExists.password = '';
            return res.json({playerExists, token});
        }else{
            return res.sendStatus(401);
        }
    }
}
export default new AuthController();
import {app, setup} from "../../index";
import {afterAll, describe, expect, test} from "@jest/globals"
import supertest from "supertest";
import { getConnection } from "typeorm";

let guns = [
    { id: 1, nome: 'Red Dragon', peso: 10, valor: 10, comprimento_cano: 10, type: 'Fire'}
]
let mun = [
    { id: 1, explosivo: true, arma_id: 1, nome: 'Scouls', peso: 10, valor: 10, Calibre: '03'}
]

describe('Testes de armas', () => {
    beforeAll(async () => {
        await setup()
    });
    afterAll(async () => {
        await getConnection().close()
        console.log("Conexão finalizada!")
    });

    it('Adicionar ou remover itens', async() => {
        var agent = supertest(app)
        const a = await agent.post('/arma/list')
        const m = await agent.post('/municao/list')
        const aBody = a.body
        const mBody = m.body
        if(aBody.length == 0 && mBody.length == 0) {
            console.log("Nenhuma arma e munição foram encontradas!")
            for(let A of guns) {
                await agent.post('/arma/store').send(A)
            } for(let M of mun) {
                await agent.post('/municao/store').send(M)
            }
        } else {
            console.log("Armas:\n", aBody)
            console.log("Munições:\n", mBody)
            for(let M of mBody) {
                await agent.post('/municao/delete').send({ id: M.id })
            } for(let A of aBody) {
                await agent.post('/arma/delete').send({ id: A.id })
            }
        }
        //console.log("Armas:\n", aBody)
        //console.log("Munições:\n", mBody)
    })
})
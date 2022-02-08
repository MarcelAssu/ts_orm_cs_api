import 'reflect-metadata';
import express, {application} from 'express';
import { setup } from './database/connect';
import router from './routes';



const app = express();
app.use(express.json());
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    next();
});
app.use(router);
export {app, setup};
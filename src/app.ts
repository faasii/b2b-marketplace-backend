import 'dotenv/config'
import './config/db'
import express from 'express';
import router from './modules';
import responseHandler from './utils/response/responseHandler'
import logger from 'morgan'
import helmet from "helmet";




const app = express(); // creating instence

app.use(logger('dev')); // logging
app.use(helmet());

app.use((req, res, next) => responseHandler(req, res, next));
app.use(express.json());

app.use('/api', router) // router






export default app;

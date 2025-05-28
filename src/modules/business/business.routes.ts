import { Router } from 'express';
import { businessController } from './business.controller';


const productRoutes = Router();

productRoutes.get('/search',businessController.search);



export default productRoutes;

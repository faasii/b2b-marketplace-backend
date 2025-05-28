import express from 'express'
import productRoutes from './business/business.routes'

const router = express.Router()


router.use('/', productRoutes)



export default router
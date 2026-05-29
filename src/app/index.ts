import express from 'express'
import type {Express} from 'express'
import { authRouter } from './auth/router.js'



function createApplication() :Express {
    const app = express()

    //middlewares
    app.use(express.json())

    //routes
    app.get('/',(req,res)=>{
        res.json({message:'hi from jivesh'})
    })

    app.use('/auth',authRouter)
    return app
}

export default createApplication
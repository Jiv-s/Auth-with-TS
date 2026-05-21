import express from 'express'
import type {Express} from 'express'


function createApplication() :Express {
    const app = express()

    //middlewares

    //routes
    app.get('/',(req,res)=>{
        res.json({message:'hi from jivesh'})
    })
    return app
}

export default createApplication
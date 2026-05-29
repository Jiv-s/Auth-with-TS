import express from 'express'
import { Router } from 'express'
import { authenticationController } from './controller.js'

export const authRouter : Router = express.Router()
const authCntr = new authenticationController()

authRouter.post('/sign-up', authCntr.signUpHandler.bind(authCntr))
// you can use arrow function which binds this automatically
// Router().post('/signup') also valid but not reusabel
authRouter.post('/sign-in',authCntr.signinHandler.bind(authCntr))
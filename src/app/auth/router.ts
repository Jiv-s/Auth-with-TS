import express from 'express'
import { Router } from 'express'
import { authenticationController } from './controller.js'

const authRouter = express.Router()
const authCntr = new authenticationController()

authRouter.post('/signup', authCntr.signUpHandler.bind(authenticationController))
// you can use arrow function which binds this automatically
// Router().post('/signup') also valid but not reusabel
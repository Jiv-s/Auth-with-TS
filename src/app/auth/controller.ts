import express  from "express";
import type {Request,Response} from 'express'
import { signupPayload } from "./modles.js";
import {db} from "../../db/index.js";
import { userTable } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import { createHmac, randomBytes } from "node:crypto";

export class authenticationController {
    public async signUpHandler(req:Request,res:Response){
        const validatePayload = await signupPayload.safeParseAsync(req.body)
        if(!validatePayload.success) return res.status(400).json({message:'validation of req.body failed',error:validatePayload.error.issues
        })

        const {fname,lname,email,password} = validatePayload.data

        //check for email already present
        const userEmailResult = await db.select().from(userTable).where(eq(userTable.email,email)) //returns list /arr
        if(userEmailResult.length >0)return res.status(400).json({message:'email already exist',error:"dublicate email"})
        
        //hash password
        const salt = randomBytes(32).toString('hex')

        const hash = createHmac('sha256',salt).update(password).digest('hex')

        const result = await db.insert(userTable).values({
            fname,
            lname,
            email,
            password:hash,
            salt
        }).returning({id:userTable.id})

        res.status(201).json({messgae:"user succesfully registred"})
    }
}
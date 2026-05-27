import z, { email } from 'zod'

export const signupPayload = z.object({
    fname: z.string().min(2),
    lname:z.string().min(2).nullable().optional(),
    email:z.email(),
    password:z.string().min(8)
})
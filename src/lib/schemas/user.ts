import {z} from 'zod'

const userSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(3),
  recoveryKey: z.string().min(10),
  name: z.string(),
  lastname:z.string(),
  email:z.string().min(6)
})

const loginUserSchema = z.object({
  email: z.string().min(3),
  password: z.string().min(3),
})

const recoverPasswordSchema = z.object({
  email: z.string().min(3),
  recoveryKey: z.string().min(10),
  newPassword: z.string().min(3).max(20)
})

export {userSchema, loginUserSchema, recoverPasswordSchema}
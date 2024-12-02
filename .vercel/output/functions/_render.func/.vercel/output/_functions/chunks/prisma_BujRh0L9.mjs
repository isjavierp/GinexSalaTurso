import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

const userSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(3),
  recoveryKey: z.string().min(10),
  name: z.string(),
  lastname: z.string(),
  email: z.string().min(6)
});
const loginUserSchema = z.object({
  email: z.string().min(3),
  password: z.string().min(3)
});
const recoverPasswordSchema = z.object({
  email: z.string().min(3),
  recoveryKey: z.string().min(10),
  newPassword: z.string().min(3).max(20)
});

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`
});
const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export { loginUserSchema as l, prisma as p, recoverPasswordSchema as r, userSchema as u };

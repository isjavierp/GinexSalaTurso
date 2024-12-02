import { u as userSchema, p as prisma, r as recoverPasswordSchema } from '../../chunks/prisma_BujRh0L9.mjs';
import bcrypt from 'bcrypt';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  const data = await request.json();
  const saltRounds = 10;
  console.log(data);
  const user = await userSchema.safeParseAsync(data);
  if (!user.success) {
    console.log(user.error);
    return new Response(JSON.stringify({ message: "Invalid User" }), { status: 400 });
  }
  const { data: dataUser } = user;
  console.log(dataUser);
  const hashPassword = await bcrypt.hash(dataUser.password, saltRounds);
  const hashRecoveryCode = await bcrypt.hash(dataUser.recoveryKey, saltRounds);
  const dataToSave = {
    name: dataUser.name,
    lastname: dataUser.lastname,
    email: dataUser.email,
    username: dataUser.username,
    password: hashPassword,
    recoveryKey: hashRecoveryCode
  };
  let userSave;
  try {
    userSave = await prisma.user.create({
      data: dataToSave
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Error al guardar el usuario" }), { status: 500 });
  }
  return new Response(
    JSON.stringify({
      message: "User Save Succesfully",
      data: {
        username: userSave.username
      }
    }),
    {
      status: 200
    }
  );
}
async function PUT({ request }) {
  console.log(request);
  const data = await request.json();
  const userValidation = await recoverPasswordSchema.safeParseAsync(data);
  console.log(data);
  if (!userValidation.success) {
    console.log(userValidation.error);
    return new Response(JSON.stringify({ message: "Invalid User" }), { status: 400 });
  }
  let userInDB;
  try {
    userInDB = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
  }
  if (!userInDB) {
    return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
  }
  const passwordValidation = await bcrypt.compare(data.recoveryKey, userInDB.recoveryKey);
  if (!passwordValidation) {
    return new Response(JSON.stringify({ message: "Invalid recovery code" }), { status: 401 });
  }
  const hashPassword = await bcrypt.hash(data.newPassword, 10);
  const dataToSave = {
    password: hashPassword
  };
  try {
    await prisma.user.update({
      where: {
        email: data.email
      },
      data: dataToSave
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error al guardar el usuario" }), { status: 500 });
  }
  return new Response(
    JSON.stringify({
      message: "Password recovered successfully",
      data: {
        username: userInDB.username
      }
    }),
    {
      status: 200
    }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

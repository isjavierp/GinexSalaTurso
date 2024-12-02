import { l as loginUserSchema, p as prisma } from '../../chunks/prisma_BujRh0L9.mjs';
import bcrypt from 'bcrypt';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  const data = await request.json();
  const userValidation = await loginUserSchema.safeParseAsync(data);
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
  const passwordValidation = await bcrypt.compare(data.password, userInDB.password);
  if (!passwordValidation) {
    return new Response(JSON.stringify({ message: "Invalid password" }), { status: 401 });
  }
  console.log("Logueado");
  return new Response(
    JSON.stringify({
      message: "Login Successful",
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
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

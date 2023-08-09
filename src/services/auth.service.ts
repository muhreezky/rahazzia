import prisma from "@/libs/prisma";
import { default as bcrypt } from "bcryptjs";
import { ApiError } from "next/dist/server/api-utils";

type UserData = {
  email: string;
  password: string;
}
type UserRegister = UserData & { username: string };

export async function hashPassword (pass: string) {
  const salt = await bcrypt.genSalt(6);
  const hashed = await bcrypt.hash(pass, salt);
  return hashed;
}

export async function comparePass (pass: string, hashed: string) {
  const isValid = await bcrypt.compare(pass, hashed);
  return isValid;
}

export async function checkUser (email:string, username: string) {
  const user = await prisma.account.findFirst({
    where: {
      OR: [{ email: { equals: email } }, { username: { equals: username } }]
    }
  });
  return !!user;
}

export async function registerAccount({ email, password, username }: UserRegister) {
  const exists = await checkUser(email, username);
  if (exists) throw new Error("Email or Username already exists");
  const hashed = await hashPassword(password);
  const newUser = await prisma.account.create({ 
    data: {
      email,
      password: hashed,
      username
    } 
  });
  return newUser;
}

export async function loginAccount(email: string, password: string) {
  const user = await prisma.account.findFirst({
    where: { email }
  });
  const isValid = await bcrypt.compare(password, user?.password || "");
  if (!isValid || !user) throw new ApiError(400, "E-mail atau password salah, periksa lagi");
  return user;
}

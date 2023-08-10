import prisma from "@/libs/prisma"

export async function getUser (username: string) {
  const user = await prisma.account.findFirst({
    where: { username }
  });
  return user;
}
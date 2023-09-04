import prisma from "@/libs/prisma";
import { getUser } from "./user.service";

export async function sendMessage (username: string, text: string) {
  const user = await getUser(username);
  console.log("User :", user);
  const userId = user?.id;
  if (!userId) return null;
  const message = await prisma.messages.create({
    data: {
      text,
      user_id: userId
    }
  });
  return message;
}

export async function msgExists(id: string) {
  const msg = await prisma.messages.findFirst({ 
    where: { id }
  });
  return !!msg;
}

export async function replyMessage(messageId: string, text: string) {
  const exists = await msgExists(messageId);
  console.log("Exists : ", exists);
  if (!exists) return null;
  const reply = await prisma.reply.create({
    data: {
      text,
      message_id: messageId
    }
  });
  return reply;
}

export async function getReplies (message_id: string) {
  const replies = await prisma.reply.findMany({
    where: { message_id }
  });
  return replies;
}

export async function getMessages(username: string | undefined, before: string | undefined) {
  const user = await getUser(username as string);
  if (!user) return null;
  const where = { user_id: user?.id };
  let msg;
  if (!before) msg = await prisma.messages.findFirst({ where });
  if (msg?.id === undefined && !before) return null; 
  const messages = await prisma.messages.findMany({
    take: 5,
    skip: before ? 1 : 0,
    where,
    include: { 
      recipient: true,
      replies: true,
    },
    cursor: {
      id: before || msg?.id
    }
  });
  if (!messages.length) return null;
  return messages;
}
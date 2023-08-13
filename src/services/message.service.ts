import prisma from "@/libs/prisma";
import { getUser } from "./user.service";

export async function sendMessage (username: string, text: string) {
  const user = await getUser(username);
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

export async function replyMessage(messageId: string, text: string) {
  const reply = await prisma.reply.create({
    data: {
      text,
      message_id: messageId
    }
  });
  return reply;
}

export async function getMessages(username: string | undefined, before: string = "") {
  if (!username) return null;
  const user = await getUser(username as string);
  const where = { user_id: user?.id };
  let msg;
  if (!before) msg = await prisma.messages.findFirst({ where });
  const messages = await prisma.messages.findMany({
    take: 5,
    skip: before ? 1 : 0,
    cursor: {
      id: before || msg?.id
    },
    where,
    include: { 
      recipient: true
    }
  });
  if (!messages.length) return null;
  return messages;
}
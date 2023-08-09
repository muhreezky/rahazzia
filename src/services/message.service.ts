import prisma from "@/libs/prisma";

export async function sendMessage (userId: string, text: string) {
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

export async function getMessages(userId: string, before: string = "") {
  // const cursor = before ? { cursor: { id: before } } : {};
  let msg;
  if (!before) msg = await prisma.messages.findFirst();
  const messages = await prisma.messages.findMany({
    take: 5,
    skip: before ? 1 : 0,
    cursor: {
      id: before || msg?.id
    },
    where: { user_id: userId }
  });
  return messages;
}
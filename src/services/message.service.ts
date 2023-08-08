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
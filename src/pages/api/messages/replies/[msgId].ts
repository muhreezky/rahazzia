import { replyMessage } from "@/services/message.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { msgId } = req.query;
  const { text } = req.body;
  if (req.method !== "POST") return res.status(400).json({ status: 400, message: "Request method tidak cocok" });
  const reply = await replyMessage(msgId as string, text);
  if (!reply) return res.status(400).json({ status: 400, message: "Balasan tidak terkirim", reply: null });
  return res.status(201).json({ status: 201, message: "Anda membalas pesan ini", data: reply });
}
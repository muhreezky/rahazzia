import { getMessages, sendMessage } from "@/services/message.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { messageText } = req.body;
  const { username, before = "" } = req.query;
  if (req.method === "GET") {
    const messages = await getMessages(username as string, before as string);
    const length = messages?.length || 1;
    return res.status(200).json({ 
      message: "Fetch Success", 
      values: messages,
      after: messages ? messages[length - 1].id : ""
    });
  }
  if (req.method === "POST") {
    const msg = await sendMessage(username as string, messageText as string);
    if (!msg) return res.status(400).json({ message: "Kirim Pesan Gagal" });
    return res.status(201).json({ 
      message: "Kirim Pesan Berhasil", 
      msg
    })
  }
}
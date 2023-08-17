import { getMessages, sendMessage } from "@/services/message.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { text } = req.body;
  const { username, after = "" } = req.query;
  if (req.method === "GET") {
    const messages = await getMessages(username as string, after as string);
    const length = messages?.length || 1;
    return res.status(200).json({ 
      message: "Fetch Success", 
      data: {
        messages,
        after: messages?.length ? messages?.[length-1]?.id : ""
      }
    });
  }
  if (req.method === "POST") {
    const msg = await sendMessage(username as string, text as string);
    if (!msg) return res.status(400).json({ message: "Kirim Pesan Gagal" });
    return res.status(201).json({ 
      message: "Kirim Pesan Berhasil", 
      data: {
        message: msg
      }
    })
  }
  return res.status(400).json({ status: 400, message: "Request method tidak valid" });
}
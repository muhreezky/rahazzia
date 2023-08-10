import { getMessages } from "@/services/message.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;
  const messages = await getMessages(username as string);
  return res.status(200).json({ 
    message: "Fetch Success", 
    data: {
      values: messages
    }
  });
}
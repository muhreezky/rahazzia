import { registerAccount } from "@/services/auth.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    if(req.method === "POST") {
      const user = await registerAccount(req.body);
      return res.status(201).json({ message: "New User Registered", user });
    }
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
}
import { registerAccount } from "@/services/auth.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    if(req.method === "POST") {
      const user = await registerAccount(req.body);
      return res.status(201).json({ success: true, status: 201, message: "New User Registered", user });
    }
  } catch (e: any) {
    return res.status(400).json({ status: 400, success: false, message: e.message });
  }
}
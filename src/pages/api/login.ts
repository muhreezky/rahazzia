import { loginAccount } from "@/services/auth.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  const user = await loginAccount(email as string, password as string);
  if (!user){
    return res.status(400).json({ status: 400, message: "Login Failed", success: false });
  }
  return res.status(200).json({ status: 200, message: "Login Success", success: true, data: { user } });
}
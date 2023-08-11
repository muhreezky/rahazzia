import { loginAccount } from "@/services/auth.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  const loginData = await loginAccount(email as string, password as string);
  if (!loginData){
    return res.status(400).json({ message: "Login Failed", success: false });
  }
  return res.status(200).json({ message: "Login Success", success: true, user: loginData });
}
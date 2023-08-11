import { getUser } from "@/services/user.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const user = await getUser(req.query?.username as string);
  if (!user) return res.status(404).json({ message: "Akun tidak ada", user: null });
  return res.status(200).json({ 
    message: "Akun Ditemukan", user
  });
}
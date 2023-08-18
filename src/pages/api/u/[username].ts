import { getUser } from "@/services/user.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const user = await getUser(req.query?.username as string);
  if (!user) return res.status(404).json({ status: 404, message: "Akun tidak ada", user: null });
  return res.status(200).json({ 
    status: 200, message: "Akun Ditemukan", user
  });
}
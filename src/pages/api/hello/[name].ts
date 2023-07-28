import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
  return res.status(200).json({ message: `Hello ${name}` });
}
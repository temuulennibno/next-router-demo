import { products } from "@/data/products";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  switch (method) {
    case "GET":
      return res.json(products);
    default:
      return res.status(405).json({ message: "Unsupported method" });
  }
}

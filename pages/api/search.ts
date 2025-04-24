import type { NextApiRequest, NextApiResponse } from "next";

export default function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    const { q, offset, limit } = req.query;
    switch (method) {
      case "GET":
        // Buscar productos en nuestra base de datos. Chequea stock y todo lo necesario.
        res.status(200).json({ message: "GET Search OK" });
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error: unknown) {
    console.error("Error in searchHandler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

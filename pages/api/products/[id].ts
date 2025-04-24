import type { NextApiRequest, NextApiResponse } from "next";

export default function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    const { id } = req.query;
    switch (method) {
      case "GET":
        // Obtiene toda data de un producto.
        res.status(200).json({ message: `GET Product ${id} OK` });
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error: unknown) {
    console.error("Error in productHandler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

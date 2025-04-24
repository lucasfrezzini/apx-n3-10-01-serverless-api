import type { NextApiRequest, NextApiResponse } from "next";

export default function orderHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    const { productId } = req.query;
    switch (method) {
      case "POST":
        // Genera una compra en nuestra base de datos y además genera una orden de pago en MercadoPago. Devuelve una URL de MercadoPago a donde vamos a redigirigir al user para que pague.
        res
          .status(200)
          .json({ message: `POST Order ProductID ${productId} OK` });
        break;
      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error: unknown) {
    console.error("Error in orderHandler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

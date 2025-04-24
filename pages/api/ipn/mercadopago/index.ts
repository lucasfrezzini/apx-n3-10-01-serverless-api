import type { NextApiRequest, NextApiResponse } from "next";

export default function mercadoPagoHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    switch (method) {
      case "POST":
        // Recibe la señal de MercadoPago para confirmar que el pago fué realizado con éxito. Cambia el estado de la compra en nuestra base y le envía un email al usuario para avisarle que el pago se realizó correctamente. También se debe generar algún aviso hacia quienes deban procesar esta compra. Esto es algo interno así que puede ser un email o un registro en Airtable.
        res.status(200).json({ message: `POST MercadoPago OK` });
        break;
      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error: unknown) {
    console.error("Error in mercadoPagoHandler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";

export default function meAdressHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    switch (method) {
      case "PATCH":
        // Permite modificar un dato puntual del usuario al que pertenezca el token usado en el request. En este caso el objeto que describe la dirección.
        res.status(200).json({ message: "PATCH Me/Adress OK" });
        break;
      default:
        res.setHeader("Allow", ["PATCH"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error: unknown) {
    console.error("Error in meAdressHandler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

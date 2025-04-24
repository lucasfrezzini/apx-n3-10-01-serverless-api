import type { NextApiRequest, NextApiResponse } from "next";

export default function meHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req;
    switch (method) {
      case "GET":
        // Devuelve info del user asociado a ese token
        res.status(200).json({ message: "GET Me OK" });
        break;
      case "PATCH":
        // Permite modificar algunos datos del usuario al que pertenezca el token usado en el request.
        res.status(200).json({ message: "PATCH Me OK" });
        break;
      default:
        res.setHeader("Allow", ["GET", "PATCH"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error: unknown) {
    console.error("Error in meHandler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

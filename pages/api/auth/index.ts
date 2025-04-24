import type { NextApiRequest, NextApiResponse } from "next";

export default function authHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req;
    // const { email } = req.body;
    switch (method) {
      case "POST":
        // Recibe un email y encuentra/crea un user con ese email y le envía un código vía email.
        res.status(200).json({ message: "Auth OK" });
        break;
      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error: unknown) {
    console.error("Error in authHandler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

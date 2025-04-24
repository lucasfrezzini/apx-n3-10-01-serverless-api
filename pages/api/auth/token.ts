import type { NextApiRequest, NextApiResponse } from "next";

export default function authTokenHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method } = req;
    // const { email } = req.body;
    // const token = req.headers.authorization?.split(" ")[1];
    switch (method) {
      case "POST":
        // Recibe un email y un código y valida que sean los correctos. En el caso de que sean correctos devuelve un token e invalida el código.
        res.status(200).json({ message: "Auth Token OK" });
        break;
      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error: unknown) {
    console.error("Error in authTokenHandler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

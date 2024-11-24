import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Caminho para o arquivo JSON
      const filePath = path.join(process.cwd(), "public", "data", "inventory.json");

      // Obtém os dados enviados no corpo da requisição
      const updatedInventory = req.body;

      // Atualiza o arquivo JSON
      fs.writeFileSync(filePath, JSON.stringify(updatedInventory, null, 2), "utf-8");

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Erro ao atualizar o JSON:", error);
      res.status(500).json({ error: "Erro ao atualizar o JSON." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}

import { connectToDatabase } from "@/lib/db";
import Content from "@/models/Content";

export default async function handler(req, res) {
  await connectToDatabase();
  const {
    method,
    query: { id },
  } = req;

  try {
    if (method === "GET") {
      const item = await Content.findById(id).lean();
      if (!item) return res.status(404).json({ error: "Not Found" });
      return res.status(200).json(item);
    }

    if (method === "PUT") {
      const updated = await Content.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updated) return res.status(404).json({ error: "Not Found" });
      return res.status(200).json(updated);
    }

    if (method === "DELETE") {
      await Content.findByIdAndDelete(id);
      return res.status(204).end();
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server Error" });
  }
}

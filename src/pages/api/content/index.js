import { connectToDatabase } from "@/lib/db";
import Content from "@/models/Content";

export default async function handler(req, res) {
  await connectToDatabase();
  const { method } = req;

  try {
    if (method === "GET") {
      const { type, q } = req.query;
      const filter = {};
      if (type) filter.type = type;
      if (q) filter.$text = { $search: q };
      const items = await Content.find(filter)
        .sort({ order: 1, createdAt: -1 })
        .lean();
      return res.status(200).json(items);
    }

    if (method === "POST") {
      const body = req.body || {};
      const created = await Content.create(body);
      return res.status(201).json(created);
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server Error" });
  }
}

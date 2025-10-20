import { connectToDatabase } from "@/lib/db";
import Content from "@/models/Content";

const seedData = [
  // Menu Items
  {
    type: "menu",
    title: "Quantum Espresso",
    description: "Dense, chocolate finish",
    price: "$4.5",
    data: { category: "Signature Coffees" },
  },
  {
    type: "menu",
    title: "Neon Latte",
    description: "Velvety microfoam, cyan sugar rim",
    price: "$5.5",
    data: { category: "Signature Coffees" },
  },
  {
    type: "menu",
    title: "Hologram Cappuccino",
    description: "Balanced and bright",
    price: "$5",
    data: { category: "Signature Coffees" },
  },
  {
    type: "menu",
    title: "Cryo Brew",
    description: "24h steep, ultra smooth",
    price: "$5",
    data: { category: "Cold Lab" },
  },
  {
    type: "menu",
    title: "Magenta Fizz",
    description: "Nitro cold brew + raspberry",
    price: "$6",
    data: { category: "Cold Lab" },
  },
  {
    type: "menu",
    title: "Aurora Tonic",
    description: "Espresso over elderflower tonic",
    price: "$6",
    data: { category: "Cold Lab" },
  },
  {
    type: "menu",
    title: "Cyber Croissant",
    description: "Butter layers, neon glaze",
    price: "$3.5",
    data: { category: "Bites" },
  },
  {
    type: "menu",
    title: "Data Donut",
    description: "Vanilla, confetti pop",
    price: "$3",
    data: { category: "Bites" },
  },
  {
    type: "menu",
    title: "Pixel Toast",
    description: "Avocado, chili crunch",
    price: "$7",
    data: { category: "Bites" },
  },

  // Events
  {
    type: "event",
    title: "Synthwave Night",
    date: "Fri 9 PM",
    description: "Live DJ, neon latte flights",
  },
  {
    type: "event",
    title: "Hack & Sip",
    date: "Wed 7 PM",
    description: "Co-work, code, caffeine",
  },
  {
    type: "event",
    title: "Latte Art Lab",
    date: "Sun 11 AM",
    description: "Beginner friendly session",
  },

  // Locations
  {
    type: "location",
    title: "Downtown",
    data: { address: "101 Matrix Ave", hours: "7a - 11p", note: "Flagship" },
  },
  {
    type: "location",
    title: "Harbor",
    data: { address: "42 Quantum Pier", hours: "8a - 10p", note: "Waterfront" },
  },
  {
    type: "location",
    title: "Campus",
    data: { address: "7 Neural Loop", hours: "6a - 12a", note: "24/7 finals" },
  },

  // Specials
  {
    type: "special",
    title: "Chromatic Mocha",
    description: "Single‑origin cacao, cyan zest",
    price: "$6.5",
  },
  {
    type: "special",
    title: "Ion Drift Matcha",
    description: "Ceremonial, yuzu mist",
    price: "$5.5",
  },
  {
    type: "special",
    title: "Phase‑Shift Chai",
    description: "Cardamom, star anise, neon honey",
    price: "$5",
  },

  // Gallery (using gradient placeholders)
  {
    type: "gallery",
    title: "Neon Ambience",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMGM0ZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM5YjVjZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+",
  },
  {
    type: "gallery",
    title: "Cyber Vibes",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZjFmOGYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM5YjVjZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+",
  },
  {
    type: "gallery",
    title: "Neon Dreams",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM5YjVjZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMGM0ZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+",
  },
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectToDatabase();

    // Clear existing content
    await Content.deleteMany({});

    // Insert seed data
    const created = await Content.insertMany(seedData);

    return res.status(200).json({
      message: `Seeded ${created.length} items successfully`,
      count: created.length,
    });
  } catch (e) {
    console.error("Seed error:", e);
    return res.status(500).json({ error: "Server Error" });
  }
}

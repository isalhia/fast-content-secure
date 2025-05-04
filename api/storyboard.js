export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Missing text input" });

  res.status(200).json({ message: "Storyboard generated", text });
}
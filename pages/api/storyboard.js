
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const key = process.env.STABILITY_API_KEY;
  if (!key) return res.status(500).send("Server Error: Missing STABILITY_API_KEY");

  const { prompt } = req.body;
  if (!prompt) return res.status(400).send("Client Error: Missing prompt in request body");

  try {
    const fakeImageURL = "https://via.placeholder.com/768x432.png?text=Storyboard+Image+for+" + encodeURIComponent(prompt);
    res.status(200).send(fakeImageURL);
  } catch (err) {
    res.status(500).send("Stability Error: " + err.message);
  }
}

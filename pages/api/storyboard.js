
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const key = process.env.STABILITY_API_KEY;
  if (!key) {
    return res.status(500).send("Server Error: Missing STABILITY_API_KEY");
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).send("Client Error: Missing prompt in request body");
  }

  try {
    const response = await fetch("https://api.stability.ai/v2beta/stable-image/generate/core", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "stable-diffusion-xl-1024-v1-0",
        prompt,
        output_format: "png"
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(500).send("Stability API Error: " + errText);
    }

    const buffer = await response.buffer();
    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
  } catch (err) {
    res.status(500).send("Stability API Error: " + err.message);
  }
}


export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { prompt } = req.body;

  try {
    const result = await fetch("https://api.stability.ai/v1/generation/stable-diffusion-v1-5/text-to-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${process.env.STABILITY_API_KEY}`
      },
      body: JSON.stringify({
        text_prompts: [{ text: prompt }],
        cfg_scale: 7,
        height: 512,
        width: 768,
        samples: 1,
        steps: 30,
        response_format: "base64"
      })
    });

    const json = await result.json();
    if (!json.artifacts || !json.artifacts[0] || !json.artifacts[0].base64) {
      return res.status(500).json({ error: "No image generated or missing base64 format." });
    }

    res.status(200).json({ image: json.artifacts[0].base64 });

  } catch (e) {
    console.error("Storyboard error:", e);
    res.status(500).json({ error: "Storyboard error", message: e.message });
  }
}

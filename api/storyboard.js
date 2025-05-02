
export default async function handler(req, res) {
  const prompt = await req.text();
  const key = process.env.STABILITY_API_KEY;
  if (!key) return res.status(500).send("Missing Stability API Key");

  try {
    const response = await fetch("https://api.stability.ai/v2beta/stable-image/generate/core", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
        "Accept": "image/*"
      },
      body: JSON.stringify({
        prompt: prompt,
        model: "stable-diffusion-xl-beta-v2-2-2",
        output_format: "png"
      })
    });

    if (!response.ok) throw new Error("Image generation failed");
    const buffer = await response.arrayBuffer();
    res.setHeader("Content-Type", "image/png");
    res.send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).send("Stability error: " + err.message);
  }
}

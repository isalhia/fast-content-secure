
const fetch = require("node-fetch");

module.exports = async function (req, res) {
  const key = process.env.STABILITY_API_KEY;
  if (!key) return res.status(500).send("Missing Stability API Key");

  let prompt = "";
  for await (const chunk of req) {
    prompt += chunk;
  }

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
};

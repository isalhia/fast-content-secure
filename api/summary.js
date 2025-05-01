
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { prompt } = req.body;
  const instruction = "Write a 2-paragraph cinematic story summary based on this detailed idea:\n";

  try {
    const result = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: instruction + prompt }],
        max_tokens: 500
      })
    });

    const json = await result.json();
    if (!result.ok) return res.status(500).json({ error: "OpenAI error", details: json });
    res.status(200).json({ output: json.choices[0].message.content.trim() });

  } catch (e) {
    res.status(500).json({ error: "Internal error", message: e.message });
  }
}

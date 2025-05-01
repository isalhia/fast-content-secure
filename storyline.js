
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;
  const type = req.query.type || "storyline";
  const instruction = type === "script"
    ? "Write the opening 1–2 paragraphs of a cinematic screenplay scene. Format it like a script.\n"
    : "Write a 1-sentence cinematic logline based on this prompt:\n";

  try {
    const completion = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: instruction + prompt }],
        max_tokens: 300
      })
    });

    const json = await completion.json();
    const result = json.choices[0].message.content;
    res.status(200).json({ output: result.trim() });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from OpenAI" });
  }
}
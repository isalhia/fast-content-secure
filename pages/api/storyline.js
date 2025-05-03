
import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  console.log("🔁 Incoming request to /api/storyline");

  if (req.method !== "POST") {
    console.warn("❌ Invalid method:", req.method);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    console.error("❌ Missing OpenAI API Key");
    return res.status(500).send("Server Error: Missing OpenAI API Key");
  } else {
    console.log("✅ OpenAI API Key is present");
  }

  const { prompt } = req.body;
  if (!prompt) {
    console.error("❌ Missing prompt in request body");
    return res.status(400).send("Missing prompt");
  } else {
    console.log("📝 Prompt received:", prompt);
  }

  const configuration = new Configuration({ apiKey: key });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a creative film concept writer. Write a 1-paragraph storyline based on the prompt."
        },
        { role: "user", content: prompt }
      ]
    });

    const result = response.data.choices[0].message.content;
    console.log("✅ OpenAI response:", result);
    res.status(200).send(result);
  } catch (err) {
    console.error("❌ OpenAI Error:", err.message);
    res.status(500).send("OpenAI Error: " + err.message);
  }
}

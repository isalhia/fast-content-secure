
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  if (!process.env.OPENAI_API_KEY) {
    console.error("❌ Missing OpenAI API key");
    return res.status(500).send("Server Error: Missing OpenAI API key");
  }

  const { prompt } = req.body;
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a creative film concept writer. Write a 1-paragraph storyline based on the prompt." },
        { role: "user", content: prompt }
      ]
    });
    const result = response.data.choices[0].message.content;
    res.status(200).send(result);
  } catch (err) {
    console.error("OpenAI Error:", err.message);
    res.status(500).send("OpenAI Error: " + err.message);
  }
}

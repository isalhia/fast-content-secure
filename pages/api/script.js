
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { prompt } = req.body;
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a creative film concept writer. Write a short script in screenplay format based on the prompt." },
        { role: "user", content: prompt }
      ]
    });
    const result = response.data.choices[0].message.content;
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send("OpenAI Error: " + err.message);
  }
}

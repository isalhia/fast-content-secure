
import { OpenAI } from "openai";

export default async function handler(req, res) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const prompt = await req.text();

  if (!prompt || prompt.trim() === "") {
    return res.status(400).send("Prompt cannot be empty.");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: `Please write a cinematic storyline based on the following idea: ${prompt}` }],
    });

    const output = response.choices[0].message.content;
    res.status(200).send(output);
  } catch (err) {
    res.status(500).send("OpenAI error: " + err.message);
  }
}

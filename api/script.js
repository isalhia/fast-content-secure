
const { OpenAI } = require("openai");

module.exports = async function (req, res) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  let body = "";
  for await (const chunk of req) {
    body += chunk;
  }

  if (!body || body.trim() === "") {
    return res.status(400).send("Prompt cannot be empty.");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: `Write a cinematic script based on: ${body}` }],
    });

    res.status(200).send(response.choices[0].message.content);
  } catch (err) {
    res.status(500).send("OpenAI error: " + err.message);
  }
};

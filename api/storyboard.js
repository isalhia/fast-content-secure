export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;
    // Replace with actual Stability AI logic
    res.status(200).json({ message: 'Storyboard image generated', prompt });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
// pages/api/test.js
export default function handler(req, res) {
    console.log("API Key:", process.env.SPOONACULAR_API_KEY); // Check Vercel logs
    res.status(200).json({ key: process.env.SPOONACULAR_API_KEY });
  }
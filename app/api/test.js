// pages/api/test.js
export default async function handler(req, res) {
    const apiKey = process.env.SPOONACULAR_API_KEY;
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pasta`
    );
    const data = await response.json();
    res.status(200).json(data);
  }
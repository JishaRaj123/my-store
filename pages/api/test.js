export default function handler(req, res) {
  res.status(200).json({ mongoUri: process.env.MONGO_URI ? "Loaded ✅" : "Not Loaded ❌" });
}

const express = require("express");
const ogs = require('open-graph-scraper');

const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(express.json());

app.use(cors());


app.post('/metascraper', async (req, res) => {
  const { url } = req.body;

  try {
    const { result } = await ogs({ url });
    res.json(result);
  } catch (error) {
    console.error('Open Graph Scraper Error:', error);
    res.status(500).json({ error: 'Error processing metadata' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors()); // Damit Angular darauf zugreifen kann

const API_URL = process.env.STAPI_URL;
const API_KEY = process.env.STAPI_API_KEY;

// Helferfunktion
const fetchFromStrapi = (endpoint) => {
  return axios.get(`${API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

app.get('/api/pages', async (req, res) => {
  const urlFilter = req.query.url;
  try {
    const response = await fetchFromStrapi(`/api/pages?filters[url][$eq]=${urlFilter}&customPopulate=nested`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Fehler beim Abrufen der Page-Daten' });
  }
});

app.get('/api/navigation', async (req, res) => {
  try {
    const response = await fetchFromStrapi(`/api/navigation?customPopulate=nested`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Fehler beim Abrufen der Navigation' });
  }
});

app.get('/api/blogs', async (req, res) => {
  const urlFilter = req.query.url;
  const urlPart = urlFilter ? `?filters[url][$eq]=${urlFilter}&customPopulate=nested` : `?customPopulate=nested`;
  try {
    const response = await fetchFromStrapi(`/api/blogs${urlPart}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Fehler beim Abrufen der Blogs' });
  }
});

app.get('/api/posts', async (req, res) => {
  const urlFilter = req.query.url;
  const urlPart = urlFilter ? `?filters[url][$eq]=${urlFilter}&customPopulate=nested` : `?customPopulate=nested`;
  try {
    const response = await fetchFromStrapi(`/api/posts${urlPart}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Fehler beim Abrufen der Posts' });
  }
});

app.listen(PORT, () => {
  console.log(`Express server läuft auf http://localhost:${PORT}`);
});

const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build', 'index.html')));

app.use('/api/*', (_, res) => {
  res.json({ data: 'The API is working' });
});

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});

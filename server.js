const express = require('express');
const app = express();
const port = 3000;

// Route for serving HTML content
app.get('/', (req, res) => {
  res.send('Hello World!'); // Send HTML as a string
});

// Route for serving JSON content
app.get('/data.json', (req, res) => {
  res.json({ message: 'This is a JSON response' });
});

// Route for serving XML content
app.get('/data.xml', (req, res) => {
  res.set('Content-Type', 'text/xml');
  res.send('<message>This is an XML response</message>');
});

// Route for serving CSV content
app.get('/data.csv', (req, res) => {
  res.set('Content-Type', 'text/csv');
  res.send('message,This is a CSV response');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


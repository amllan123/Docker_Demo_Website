const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(cors());
// Define a simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Docker server' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');
const app = express();

// Головна сторінка
app.get('/', (req, res) => {
  res.send('Animal Tracker API is runnin');
});

// 📈 Health-check endpoint для UptimeRobot / Render
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


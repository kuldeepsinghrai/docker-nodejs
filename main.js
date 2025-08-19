const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello worlds from node app in container v2');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

const express = require('express');
const path = require('path')
const app = express();
const port = 80;

app.use('/static', express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});

app.listen(port, () => console.log(`Example app is listening on port ${port}.`));
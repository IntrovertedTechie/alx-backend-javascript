const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

if (process.argv.length !== 3) {
  console.error('Usage: node 7-http_express.js <database-file>');
  process.exit(1);
}

const databaseFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  try {
    const output = await countStudents(databaseFile);
    res.send(`This is the list of our students\n${output}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}\n`);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;

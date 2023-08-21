const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

if (process.argv.length !== 3) {
  console.error('Usage: node 5-http.js <database-file>');
  process.exit(1);
}

const databaseFile = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    try {
      const output = await countStudents(databaseFile);
      res.end(`This is the list of our students\n${output}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}\n`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;

const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        const result = parseDatabase(data);
        resolve(result);
      }
    });
  });
}

function parseDatabase(data) {
  const lines = data.trim().split('\n');
  const fields = lines[0].split(',');

  const studentsByField = {};
  fields.forEach(field => {
    studentsByField[field] = [];
  });

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    for (let j = 0; j < fields.length; j++) {
      studentsByField[fields[j]].push(values[j]);
    }
  }

  return studentsByField;
}

module.exports = { readDatabase };

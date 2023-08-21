const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const fields = {};
    for (const line of lines.slice(1)) {
      const [firstname, lastname, age, field] = line.split(',');
      if (fields[field]) {
        fields[field].count++;
        fields[field].list.push(firstname);
      } else {
        fields[field] = { count: 1, list: [firstname] };
      }
    }

    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].list.join(', ')}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;

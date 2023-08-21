const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(req.databasePath);
      res.status(200).send('This is the list of our students\n' + formatStudents(studentsByField));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsByField = await readDatabase(req.databasePath);
      const studentsInMajor = studentsByField[major];
      res.status(200).send('List: ' + studentsInMajor.join(', '));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

function formatStudents(studentsByField) {
  let result = '';
  const fields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

  fields.forEach(field => {
    const students = studentsByField[field];
    result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
  });

  return result;
}

module.exports = StudentsController;

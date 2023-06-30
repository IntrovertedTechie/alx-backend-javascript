export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
    this.students = [];
  }

  addStudent(student) {
    if (this.students.length < this._maxStudentsSize) {
      this.students.push(student);
      console.log(`${student} added to the class.`);
    } else {
      console.log(`The class is already full. Cannot add ${student}.`);
    }
  }
}

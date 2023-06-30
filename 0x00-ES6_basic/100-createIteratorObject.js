
export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);

  const iterator = {
    [Symbol.iterator]() {
      let departmentIndex = 0;
      let employeeIndex = 0;

      return {
        next() {
          if (departmentIndex < departments.length) {
            const department = departments[departmentIndex];
            const employees = report.allEmployees[department];

            if (employeeIndex < employees.length) {
              const value = employees[employeeIndex];
              employeeIndex++;
              return { value, done: false };
            } else {
              departmentIndex++;
              employeeIndex = 0;
              return this.next();
            }
          } else {
            return { done: true };
          }
        },
      };
    },
  };

  return iterator;
}
// Returns the string 'I prefer const when I can.'
export function taskFirst() {
  const task = 'I prefer const when I can.'; // Declare a constant variable 'task'
  return task;
}

// Returns the string ' is okay'
export function getLast() {
  return ' is okay';
}

// Returns a combination of two strings
export function taskNext() {
  let combination = 'But sometimes let'; // Declare a variable 'combination' using 'let'
  combination += getLast(); // Append the result of getLast() to 'combination'

  return combination;
}


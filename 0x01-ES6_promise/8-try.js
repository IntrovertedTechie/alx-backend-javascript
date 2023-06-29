//The code exports a function named divideFunction that accepts numerator and denominator as arguments. It throws an error with the message "Cannot divide by 0" when the denominator is 0, and returns the result of the division otherwise.
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  }
  return numerator / denominator;
}


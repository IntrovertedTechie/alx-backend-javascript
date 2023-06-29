//The code exports a function named guardrail that accepts a mathFunction as an argument, executes it, and appends the returned value or error message to an array called queue, along with the message 'Guardrail was processed'.
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}


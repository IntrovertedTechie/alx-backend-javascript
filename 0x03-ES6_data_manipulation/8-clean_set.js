const cleanSet = (set, startString) => {
  let result = '';

  set.forEach(value => {
    if (value.startsWith(startString)) {
      const cleanedValue = value.slice(startString.length);
      result += cleanedValue + '-';
    }
  });

  // Remove the trailing '-' if any
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
};

export default cleanSet;

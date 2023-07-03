const cleanSet = (set, startString) => {
  let result = '';

  set.forEach(value => {
    if (value.startsWith(startString)) {
      const cleanedValue = value.slice(startString.length);
      result += cleanedValue + '-';
    }
  });

  
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
};

export default cleanSet;

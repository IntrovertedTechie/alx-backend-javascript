const cleanSet = (set, startString) => {
  const cleanedValues = [];

  if (
    typeof set !== 'object' ||
    !(set instanceof Set) ||
    typeof startString !== 'string' ||
    startString.length === 0
  ) {
    return '';
  }

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  }

  return cleanedValues.join('-');
};

export default cleanSet;

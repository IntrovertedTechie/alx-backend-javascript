function hasValuesFromArray(set, arr) {
  for (let item of arr) {
    if (!set.has(item)) {
      return false;
    }
  }
  
   return true;
};

export default hasValuesFromArray;

function cleanSet(set, startString) {
  let result = "";
  for (let item of set) {
    if (item.startsWith(startString)) {
      const rest = item.substring(startString.length);
      result += rest + "-";
    }
  }
  return result.slice(0, -1);
}

export default cleanSet;

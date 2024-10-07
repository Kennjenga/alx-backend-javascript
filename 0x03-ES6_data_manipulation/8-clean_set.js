export default function cleanSet(set, prefix) {
  if (!set && !(set instanceof Set)) {
    return '';
  }

  //   If prefix is an empty string, return the set as a string
  if (prefix === '') {
    return '';
  }

  //   Remove the prefix from each item in the set and join them with '-'
  //   Return the new string as the result
  return [...set].filter((item) => item.startsWith(prefix)).join('-');
}

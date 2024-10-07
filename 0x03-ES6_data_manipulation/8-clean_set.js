export default function cleanSet(set, prefix) {
  if (!set && !prefix && !(set instanceof Set) && typeof prefix !== 'string') {
    return '';
  }

  const parts = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(prefix)) {
      const valueSubStr = value.substring(prefix.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}

// export default function cleanSet(set, prefix) {
//   if (!set && !(set instanceof Set)) {
//     return '';
//   }

//   //   If prefix is an empty string, return the set as a string
//   if (prefix === '') {
//     return '';
//   }

//   //   Remove the prefix from each item in the set and join them with '-'

//   return [...set]
//     .filter((item) => item.startsWith(prefix))
//     .map((item) => item.replace(prefix, ''))
//     .join('-');
// }

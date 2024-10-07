export default function hasValuesFromArray(setArr, arr) {
  if (arr instanceof Array) {
    // should check if all elements of arr are in setArr
    return arr.every((i) => setArr.has(i));
    // for (let i of arr) {
    //   // if i is in setArr which is a Set
    //   if (setArr.has(i)) {
    //     return true;
    //   }
    // }
  }
  return false;
}

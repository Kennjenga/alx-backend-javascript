export default function getStudentIdsSum(arr) {
  if (arr instanceof Array) {
    return arr.reduce((sum, item) => sum + item.id, 0);
  }
  return 0;
}

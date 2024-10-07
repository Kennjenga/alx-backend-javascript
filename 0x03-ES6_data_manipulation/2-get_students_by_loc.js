export default function getStudentsByLocation(arr, city) {
  let cityarray = [];
  if (arr instanceof Array) {
    cityarray = arr.filter((item) => item.location === city);
  }

  return cityarray;
}

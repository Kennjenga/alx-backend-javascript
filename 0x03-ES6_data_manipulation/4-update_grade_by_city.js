export default function updateStudentGradeByCity(studentArr, city, newGrades) {
  if (studentArr instanceof Array) {
    return studentArr
      .filter((student) => student.location === city)
      .map((student) => {
        // find in newGrades the students with same id
        const gradeObj = newGrades.find(
          (grade) => grade.studentId === student.id,
        );
        // add the grade if it exists
        return {
          ...student,
          grade: gradeObj ? gradeObj.grade : 'N/A', // Add grade if found, else 'N/A'
        };
      });
  }
  return [];
}

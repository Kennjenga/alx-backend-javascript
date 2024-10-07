export default function updateStudentGradeByCity(studentArr, city, newGrades) {
  if (studentArr instanceof Array) {
    return studentArr
      .filter((student) => student.location === city)
      .map((student) => {
        const gradeObj = newGrades.find(
          (grade) => grade.studentId === student.id,
        );
        return {
          ...student,
          grade: gradeObj ? gradeObj.grade : 'N/A', // Add grade if found, else 'N/A'
        };
      });
  }
  return [];
}

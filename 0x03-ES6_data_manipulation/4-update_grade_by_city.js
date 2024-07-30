/* eslint-disable */
export default function updateStudentGradeByCity(data, city, newGrades) {
    if (!Array.isArray(data)) {
        return [];
    }
    // Filter main data by the city
    const dataByCity = data.filter(dataLoc => dataLoc.location === city);
    // Map over the filtered data to add the grades 
    return dataByCity.map(dataLoc => {
        // Find the grade object in newGrades that matches the data object id
        const gradeObj = newGrades.find(grade => grade.studentId === dataLoc.id);
        // Return a new data object with the updated grade
        return {
            ...dataLoc,
            grade: gradeObj ? gradeObj.grade : "N/A"
        };
    });
}
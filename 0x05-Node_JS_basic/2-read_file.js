/*eslint-disable*/
const fs = require('fs');

function countStudents(path) {
    try {
        // Read file synchronously
        const data = fs.readFileSync(path, 'utf8');
        // Split the data by new lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        // Check for invalid lines
        if (lines.length <= 1) {
            throw new Error('File does not contain valid student data');
        }
        // Extract the header
        const header = lines[0].split(',');
    
        const studentsByField = {};
        for (let x = 1; x < lines.length; x++) {
            const line = lines[x].trim();
            if (line !== '') {
                const parts = line.split(',');
                if (parts.length === header.length) {
                    const firstname = parts[0].trim();
                    const field = parts[3].trim();
                    if (!studentsByField[field]) {
                        studentsByField[field] = [];
                    }
                    studentsByField[field].push(firstname);
                }
            }
        }
        // Calculate the total number of students
        const totalStudents = Object.values(studentsByField)
                                     .reduce((acc, students) => acc + students.length, 0);
        console.log(`Number of students: ${totalStudents}`);
        // Log the number of students per field
        for (const [field, students] of Object.entries(studentsByField)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        } 
    } catch (error) {
        console.error('Cannot load the database');
    }
}

module.exports = countStudents;
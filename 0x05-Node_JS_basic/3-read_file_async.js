const { queryObjects } = require('v8');

/*eslint-diable*/
const fs = require('fs').promises;

function countStudents(path) {
    return fs.readFile(path, 'utf8')
        .then((data) => {
            const lines = data.split('\n').filter((line) => line.trim() !== '');
            if (lines.length <= 1) {
                throw new Error('File does not contain valid data');
            }
            const studentsByField = {};
            for (let x = 1; x < lines.length; x++) {
                const line = lines[x].trim();
                if (line !== '') {
                    const parts = line.split(',');
                    const firstname = parts[0].trim();
                    const field = parts[3].trim();

                    if (!studentsByField[field]) {
                        studentsByField[field] = [];
                    }
                    studentsByField[field].push(firstname);
                }
            }

            const totalStudents = Object.values(studentsByField)
                                        .reduce((acc, students) => acc + students.length, 0);
            console.log(`Number of students: ${totalStudents}`);
            for (const [field, students] of Object.entries(studentsByField)) {
                console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
            }
        })
        .catch((error) => {
            console.error('Cannot load the database');
            throw error;
        });
}

module.exports = countStudents;
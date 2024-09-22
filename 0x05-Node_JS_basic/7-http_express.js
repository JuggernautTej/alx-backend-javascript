/*eslint-disable*/
const express = require('express');
const fs = require('fs').promises;

const app = express();
const database = process.argv[2];

function countStudents(database) {
    return fs.readFile(database, 'utf8')
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
            let result = `Number of students: ${totalStudents}\n`;
            for (const [field, students] of Object.entries(studentsByField)) {
                result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
            }
            return result.trim();
        })
        .catch((error) => {
            console.error('Cannot load the database');
            throw error;
        });
}

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
  });
app.get('/students', async (req, res) => {
    res.write('This is the list of our students\n');
    try {
        const result = await countStudents(database);
        res.write(result);
    } catch (error) {
        res.write('Cannot load the database\n');
    } finally{
        res.end();
    }
});

app.listen(1245);

module.exports = app;
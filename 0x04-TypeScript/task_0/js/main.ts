interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentA: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 40,
    location: "Los Angeles"
}

const studentB: Student = {
    firstName: "Abel",
    lastName: "Abayomi",
    age: 42,
    location: "Lagos"
}

const studentsList: Student[] = [studentA, studentB];

function renderTable(students: Student[]) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();

    const headers = ["First Name", "Location"];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    students.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();

        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });
    
    document.body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => renderTable(studentsList));
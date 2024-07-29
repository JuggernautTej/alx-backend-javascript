/** */
export default function getListStudents() {
    const data = [];
    const dataObj = {};
    
    dataObj.id = 1;
    dataObj.firstname = 'Guillaume';
    dataObj.location = 'San Francisco';
    data.push({ ...dataObj});

    dataObj.id = 2;
    dataObj.firstname = 'James';
    dataObj.location = 'Columbia';
    data.push({ ...dataObj});

    dataObj.id = 5;
    dataObj.firstname = 'Serena';
    dataObj.location = 'San Francisco';
    data.push({ ...dataObj});
    return data;
}
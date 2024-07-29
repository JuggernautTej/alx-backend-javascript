/* eslint-disable */
export default function getListStudents() {
    const data = [];
    const dataObj = {};
    
    dataObj.id = 1;
    dataObj.firstName = 'Guillaume';
    dataObj.location = 'San Francisco';
    data.push({ ...dataObj});

    dataObj.id = 2;
    dataObj.firstName = 'James';
    dataObj.location = 'Columbia';
    data.push({ ...dataObj});

    dataObj.id = 5;
    dataObj.firstName = 'Serena';
    dataObj.location = 'San Francisco';
    data.push({ ...dataObj});
    return data;
}
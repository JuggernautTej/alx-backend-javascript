/* eslint-disable */
export default function getStudentByLocation(data, city) {
    if (!Array.isArray(data)) {
        return [];
    }
    
    const result = data.filter((item) => item.location === city);
    return result;
} 
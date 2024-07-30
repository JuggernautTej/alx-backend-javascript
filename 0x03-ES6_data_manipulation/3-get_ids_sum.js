/* eslint-disable */
export default function getStudentIdsSum(data) {
    const sumIds = data.reduce(
        (accumulator, currentValue) => accumulator + currentValue.id, 
        0,
    );
    return sumIds;
}
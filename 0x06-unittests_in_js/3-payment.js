/*eslint-disable*/
const calculateNumber = require('./utils').calculateNumber
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const summation = calculateNumber(totalAmount, totalShipping, 'SUM')
    console.log(`The total is: ${summation}`);
}
/* eslint-disable */
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate success or failure
            if (success) {
                resolve('Resolution achieved!');
            } else {
                reject('Rejection, disgrace!');
            }
        }, 3000);
    });
}
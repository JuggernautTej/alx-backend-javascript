/* eslint-disable */
export default function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            resolve({ firstName: `${firstName}`, lastName: `${lastName}`});
        } else {
            reject(new Error(''));
        }
    });
}
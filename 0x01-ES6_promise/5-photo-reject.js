/* eslint-disable */
export default function uploadPhoto(filename) {
    return new Promise ((resolve, reject) => {
        const success = false;
        if (success) {
            resolve('');
        } else {
            reject(new Error(`${filename} cannot be processed`));
        }
    });
}
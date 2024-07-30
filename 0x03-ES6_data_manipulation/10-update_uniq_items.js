/* eslint-disable */
export default function updateUniqueItems(data) {
    if (!(data instanceof Map)) {
        throw new Error('Cannot process');
    }
    for (const [key, value] of data) {
        if (value === 1) {
            data.set(key, 100);
        }
    }
    return data;
}
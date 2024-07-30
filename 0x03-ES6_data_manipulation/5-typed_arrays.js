/* eslint-disable */
export default function createInt8TypedArray(length, position, value) {
    // Create new ArrayBuffer of the provided length
    const buffer = new ArrayBuffer(length);
    // Create a DataView to manipulate the buffer
    const dataView = new DataView(buffer);
    // Check if the provided position is within range
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }
    // Set the Int8 value at the provided position
    dataView.setInt8(position, value);
    // return the buffer
    return buffer;
}
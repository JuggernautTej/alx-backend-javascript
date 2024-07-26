/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
    const new_arr = [];
    for (const member of array) {
      new_arr.push(appendString + member);
    }
  
    return new_arr;
  }
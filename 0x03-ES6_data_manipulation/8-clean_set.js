/* eslint-disable */
export default function cleanSet(set, startString) {
    /*
    - loop through the set
    - compare the start of each element of the set with the startString
    - if the element has the startString at its begining, the element should be appended with the rest of its value
    */
   if (startString === ''){
    return ''
   }
   
    const newString = [];
    for (const item of set) {
        if (item.startsWith(startString)) {
            newString.push(item.slice(startString.length));
        }
    }
    return newString.join('-')
}
/* eslint-disable */
export default function cleanSet(set, startString) {
   if (startString === ''){
    return ''
   }
   
    const filteredValues = [...set].filter(value => value.startsWith(startString));
    const mappedValues = filteredValues.map(value => value.slice(startString.length));

    return mappedValues.join('-');
}
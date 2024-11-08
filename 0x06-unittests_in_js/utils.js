/*eslint-disable*/
const Utils = {
    calculateNumber: function(a, b, type) {
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);
        
        if (type === 'SUM') {
            return roundedA + roundedB;
        } else if (type === 'SUBTRACT') {
            return roundedA - roundedB;
        } else if (type === 'DIVIDE') {
                if (roundedB === 0) {
                    return "Error"
                }
            return roundedA / roundedB;
        }   
    }
};

module.exports = Utils;
const assert = require("assert");
const calculateNumber = require("./0-calcul");
// import { calculateNumber } from  "./0-calcul";

describe('Calculator Tests', function () {
    it('should return 6 when a is 1.2 and b is 4.5', function () {
        assert.equal(calculateNumber(1.2, 4.5), 6);
    });
    it('should return 8 when a is 3.7 and b is 4.1', function () {
        assert.equal(calculateNumber(3.7, 4.1), 8);
    });
    it('should return -6 when a is -1.5 and b is -5.3', function () {
        assert.equal(calculateNumber(-1.5, -5.3), -6);
    });
    it('should return 5 when a is 1 and b is 4', function () {
        assert.equal(calculateNumber(1, 4), 5);
    });
});
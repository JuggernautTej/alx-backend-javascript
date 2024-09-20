const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe('Calculate Tests', function (){
    describe('SUM tests', function(){
        it('should return -8', function (){
            assert.equal(calculateNumber(-1.7, -6.4, 'SUM'), -8);
        });
    });
    describe('SUBTRACT tests', function(){
        it('should return 3', function (){
            assert.equal(calculateNumber(5.7, 3.4, 'SUBTRACT'), 3);
        });
    });
    describe('DIVIDE tests', function(){
        it('should return 2', function (){
            assert.equal(calculateNumber(5.7, 3.4, 'DIVIDE'), 2);
        });
        it('should return Error', function (){
            assert.equal(calculateNumber(5.7, 0, 'DIVIDE'), 'Error');
        });
    });
})
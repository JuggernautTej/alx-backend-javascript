/*eslint-disable*/
// const assert = require("assert");
const calculateNumber = require('./2-calcul_chai.js');
const { expect } = require('chai');

describe('Calculate Tests', function () {
    describe('SUM tests', function() {
        it('should return -8', function () {
            expect(calculateNumber(-1.7, -6.4, 'SUM')).to.equal(-8);
        });
        it('should return 15', function () {
            expect(calculateNumber(11.7, 3.4, 'SUM')).to.equal(15);
        });
    });
    describe('SUBTRACT tests', function() {
        it('should return 3', function () {
            expect(calculateNumber(5.7, 3.4, 'SUBTRACT')).to.equal(3);
        });
        it('should return -1', function () {
            expect(calculateNumber(2.6, 3.5, 'SUBTRACT')).to.equal(-1);
        });
    });
    describe('DIVIDE tests', function() {
        it('should return 2', function () {
            expect(calculateNumber(5.7, 3.4, 'DIVIDE')).to.equal(2);
        });
        it('should return Error', function () {
            expect(calculateNumber(5.7, 0, 'DIVIDE')).to.equal('Error');
        });
    });
});
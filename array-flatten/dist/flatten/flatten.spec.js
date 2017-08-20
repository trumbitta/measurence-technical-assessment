"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const flatten_1 = require("./flatten");
describe('"flattenArray"', () => {
    it('should exist and be a function', () => {
        chai_1.expect(flatten_1.flattenArray).to.be.a('function');
    });
    it('should flatten an array of arbitrarily nested arrays of integers', () => {
        const nested = [[1, 2, [3]], 4, [5]];
        const flat = [1, 2, 3, 4, 5];
        chai_1.expect(flatten_1.flattenArray(nested)).to.deep.equal(flat);
    });
});

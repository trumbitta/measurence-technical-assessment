'use strict';

const expect = require('chai').expect;

const Flatten = require('./flatten.module');

describe('Flatten module', () => {
  describe('"flattenArray"', () => {
    it('should exist and be a function', () => {
      expect(Flatten.flattenArray).to.be.a('function');
    });

    it('should flatten an array of arbitrarily nested arrays of integers', () => {
      const nested = [[1, 2, [3]], 4, [5]];
      const flat = [1, 2, 3, 4, 5];

      expect(Flatten.flattenArray(nested)).to.deep.equal(flat);
    });
  });
});

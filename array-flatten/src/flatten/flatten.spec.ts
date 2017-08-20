import { expect } from 'chai';

import { flattenArray } from './flatten';

describe('"flattenArray"', () => {
  it('should exist and be a function', () => {
    expect(flattenArray).to.be.a('function');
  });

  it('should flatten an array of arbitrarily nested arrays of integers', () => {
    const nested = [[1, 2, [3]], 4, [5]];
    const flat = [1, 2, 3, 4, 5];

    expect(flattenArray(nested)).to.deep.equal(flat);
  });
});

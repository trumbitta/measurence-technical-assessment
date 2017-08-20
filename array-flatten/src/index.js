'use strict';

const Flatten = require('./flatten/flatten.module');

const arrayNested = [[1, 2, [3, 4, [5, 6]]], 7, [8]];
console.log('Nested:\n\t', arrayNested);

const arrayFlat = Flatten.flattenArray(arrayNested);
console.log('\nFlat:\n\t', arrayFlat);

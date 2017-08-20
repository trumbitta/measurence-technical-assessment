import { flattenArray } from './flatten/flatten';

const arrayNested = [[1, 2, [3, 4, [5, 6]]], 7, [8]];
console.log('Nested:\n\t', arrayNested);

const arrayFlat = flattenArray(arrayNested);
console.log('\nFlat:\n\t', arrayFlat);

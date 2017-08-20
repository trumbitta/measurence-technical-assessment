import { flattenArray } from './flatten/flatten';

const arrayNested = [[1, 2, [3, 4, [5, 6]]], 7, [8]];
const arrayFlat = flattenArray(arrayNested);

/* tslint:disable:no-console */
console.log('Nested:\n\t', arrayNested);
console.log('\nFlat:\n\t', arrayFlat);

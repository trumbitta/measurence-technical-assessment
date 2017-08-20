"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatten_1 = require("./flatten/flatten");
// I think it's overkill to implement something like https://stackoverflow.com/a/42621557/1030207 for this test,
// so the function won't be type-checking the input array besides being an array.
const arrayNested = [[1, 2, [3, 4, [5, 6]]], 7, [8]];
const arrayFlat = flatten_1.flattenArray(arrayNested);
/* tslint:disable:no-console */
console.log('Nested:\n\t', arrayNested);
console.log('\nFlat:\n\t', arrayFlat);

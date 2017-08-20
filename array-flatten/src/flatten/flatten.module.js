'use strict';

function flattenArray(toFlatten) {
  return toFlatten.reduce(
    (arrayAccumulator, currentValue) => {
      const toConcat = Array.isArray(currentValue) ? flattenArray(currentValue) : currentValue;
      return arrayAccumulator.concat(toConcat);
    },
    []
  );
}

module.exports = {
  flattenArray: flattenArray
};

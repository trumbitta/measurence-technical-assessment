export function flattenArray(toFlatten) {
  return toFlatten.reduce(
    (arrayAccumulator, currentValue) => {
      const toConcat = Array.isArray(currentValue) ? this.flattenArray(currentValue) : currentValue;
      return arrayAccumulator.concat(toConcat);
    },
    []
  );
}

export function flattenArray(toFlatten: any[]): number[] {
  return toFlatten.reduce(
    (arrayAccumulator, currentValue) => {
      const toConcat = Array.isArray(currentValue) ? this.flattenArray(currentValue) : currentValue;
      return arrayAccumulator.concat(toConcat);
    },
    []
  ) as number[];
}

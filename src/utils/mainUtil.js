export const objHasFalseValue = (data) =>
  Object.values(data).some((val) => Boolean(val) === false);

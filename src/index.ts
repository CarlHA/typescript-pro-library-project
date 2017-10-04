export function isBoolean(val: any): val is Boolean {
  return val instanceof Boolean || val === true || val === false;
}

export default {
  isBoolean
};

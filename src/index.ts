export function isBoolean(val: any): Boolean {
  return val instanceof Boolean || val === true || val === false;
}

export default {
  isBoolean
};

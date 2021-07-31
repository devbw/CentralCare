export function diff(newString, oldString) {
  return newString.split(oldString).join('');
}

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let array = [...names];
  const newArr = [...names];
  let n;
  for (let i = 0; i < array.length; i++) {
    array = newArr.map((item) => item);
    n = 0;
    for (let j = 0; j < newArr.length; j++) {
      if (array[i] === newArr[j] && n > 0) {
        newArr[j] = `${array[j]}(${n++})`;
      } else if (array[i] === newArr[j] && n === 0) {
        n++;
      }
    }
  }
  return array;
}

module.exports = renameFiles;

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = n.toString().split('');
  let nString = n.toString().split('');
  const resultArr = [];
  for (let i = 0; i < nArr.length; i++) {
    nString = n.toString().split('');
    nString.splice(i, 1);
    resultArr.push(Number(nString.join('')));
  }
  resultArr.sort((a, b) => b - a);
  return resultArr[0];
}

module.exports = deleteDigit;

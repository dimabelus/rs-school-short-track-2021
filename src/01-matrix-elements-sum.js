/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let totalSum = 0;
  // Iter length
  for (let i = 0; i < matrix[0].length; i++) {
    // Iter heigth
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > 0) {
        totalSum += matrix[j][i];
      } else {
        // Stop when below 0
        break;
      }
    }
  }
  return totalSum;
}

module.exports = getMatrixElementsSum;

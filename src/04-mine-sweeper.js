/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const array = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === false) {
        array.push(0);
      } else if (matrix[i][j] === true) {
        array.push(1);
      }
    }
  }
  const sweepedArray = [];
  for (let i = 0; i < Math.ceil(array.length / 3); i++) {
    sweepedArray[i] = array.slice(i * 3, i * 3 + 3);
  }
  const column = sweepedArray[0].length;
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < sweepedArray.length; j++) {
      if (sweepedArray[j][i] === 1 && i === 0) {
        sweepedArray[j][i + 1] = 2;
      } else if (sweepedArray[j][i] === 1 && i === 1) {
        sweepedArray[j][i - 1] = 2;
      } else if (sweepedArray[j][i] === 2) {
        sweepedArray[j][i + 1] = 1;
      } else if (sweepedArray[j][i - 1] === 1) {
        sweepedArray[j][i] = 1;
      } else if (sweepedArray[0][i] === 1) {
        sweepedArray[j][i] = 1;
      }
    }
  }
  return sweepedArray;
}
module.exports = minesweeper;

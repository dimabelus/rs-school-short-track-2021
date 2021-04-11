/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let lL = l;
  let current = lL;
  while (current != null) {
    while (current.next !== null && current.next.value === k) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  while (lL !== null && lL.value === k) {
    lL = lL.next;
  }
  return lL;
}

module.exports = removeKFromList;

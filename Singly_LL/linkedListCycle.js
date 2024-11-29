// if a linked list is repeating its cycle or not if the last next node points to prev node then there is a cycle
// used fast and slow pointers
// after iterating the loop
// if there is a cycle then it must be found to fast
// if fast ===  slow then its true there is a repeating cycle

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

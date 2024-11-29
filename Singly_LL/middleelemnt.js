// we used fast and slow pointer technique in this
// slow = slow+1 (1 jump)
// fast = fast + 1+1 (2 jumps)s
// when fast reached end of list slow pointer will be at middle
// slow = middle element

var middleNode = function (head) {
  if (!head) {
    return null;
  }
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

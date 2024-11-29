// used fast and slow pointers to find mid
// finding max of start + end

var pairSum = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev = null;
  while (slow) {
    let nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }
  let maxTwinSum = 0;
  let start = head,
    end = prev;
  while (end) {
    maxTwinSum = Math.max(maxTwinSum, start.val + end.val);
    start = start.next;
    end = end.next;
  }
  return maxTwinSum;
};

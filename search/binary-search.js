function binarySearch(arr, target) {
  function search(head, tail) {
    let midIdx = parseInt((head + tail) / 2);
    if (head === tail) {
      if (arr[head] !== target) return -1;
      return head;
    }

    if (arr[midIdx] < target) {
      return search(midIdx + 1, tail);
    } else {
      return search(head, midIdx);
    }
  }

  return search(0, arr.length - 1);
}

export default class Sort {
  constructor(arr) {
    this.array = arr;
    this.init();
  }

  init() {
    this.temp = 0;
    this.tempArr = this.array.map(item => item);
  }

  selectionSort() {
    this.init();

    for (let i = 0; i < this.tempArr.length; i++) {
      for (let j = 0; j < this.tempArr.length; j++) {
        if (this.tempArr[i] < this.tempArr[j]) {
          this.temp = this.tempArr[i];
          this.tempArr[i] = this.tempArr[j];
          this.tempArr[j] = this.temp;
        }
      }
    }
    return this.tempArr;
  }

  bubbleSort() {
    this.init();

    for (let i = 0; i < this.tempArr.length; i++) {
      for (let j = 0; j < this.tempArr.length - 1 - i; j++) {
        if (this.tempArr[j] > this.tempArr[j + 1]) {
          this.temp = this.tempArr[j];
          this.tempArr[j] = this.tempArr[j + 1];
          this.tempArr[j + 1] = this.temp;
        }
      }
    }
    return this.tempArr;
  }

  insertSort() {
    this.init();

    for (let i = 1; i < this.tempArr.length; i++) {
      let target = this.tempArr[i];
      let currIdx = i - 1;

      while (currIdx >= 0 && target < this.tempArr[currIdx]) {
        this.tempArr[currIdx + 1] = this.tempArr[currIdx];
        currIdx--;
      }

      this.tempArr[currIdx + 1] = target;
    }
  }

  mergeSort(array = this.array) {
    if (array.length < 2) {
      return array;
    }

    const mid = Math.floor(array.length / 2);

    const leftArr = array.slice(0, mid);
    const rightArr = array.slice(mid);

    return merge(this.mergeSort(leftArr), this.mergeSort(rightArr));

    function merge(leftArr, rightArr) {
      const resultArr = [];
      let leftArrIdx = 0;
      let rightArrIdx = 0;

      while (leftArrIdx < leftArr.length && rightArrIdx < rightArr.length) {
        if (leftArr[leftArrIdx] < rightArr[rightArrIdx]) {
          resultArr.push(leftArr[leftArrIdx]);
          leftArrIdx++;
        } else {
          resultArr.push(rightArr[rightArrIdx]);
          rightArrIdx++;
        }
      }

      return resultArr.concat(leftArr.slice(leftArrIdx), rightArr.slice(rightArrIdx));
    }
  }

  quickSort(array = this.array) {
    if (array.length < 2) {
      return array;
    }

    const mid = Math.floor(array.length / 2);
    const pivot = [array[mid]];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < pivot) {
        leftArr.push(array[i]);
      } else if (array[i] > pivot) {
        rightArr.push(array[i]);
      }
    }

    return this.quickSort(leftArr).concat(pivot, this.quickSort(rightArr));
  }

  inPlaceQuickSort(array = this.array, head = 0, tail = this.array.length - 1) {
    if (head >= tail) {
      return;
    }

    const mid = Math.floor((head + tail) / 2);
    const pivot = array[mid];
    const partition = divideArray(array, head, tail, pivot);

    this.inPlaceQuickSort(array, head, partition - 1);
    this.inPlaceQuickSort(array, partition, tail);

    function divideArray(array, head, tail, pivot) {
      console.log(`array: ${array}, left: ${array[head]}, pivot: ${pivot}, right: ${array[tail]}`)

      while (head <= tail) {
        while (array[head] < pivot) {
          head++;
        }
        while (array[tail] > pivot) {
          tail--;
        }

        if (head <= tail) {
          let tmp = array[head];
          array[head] = array[tail];
          array[tail] = tmp;
          head++;
          tail--;
        }
      }
      return head;
    }
    return array;
  }
}

// const sort = new Sort([5,0,9,1,8,3,2,4,7,6]);

const sort = new Sort([5, 3, 7, 1, 9, 6, 2]);

// sort.selectionSort();
// sort.bubbleSort();
// sort.insertSort();
// sort.mergeSort();
// console.log(sort.quickSort());
console.log(sort.inPlaceQuickSort());

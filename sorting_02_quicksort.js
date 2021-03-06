console.clear();
console.log(`Quicksort`);

// The worst case time complexity of a typical implementation of QuickSort is O(n2). 
// The worst case occurs when the picked pivot is always an extreme (smallest or largest) element. 
// This happens when input array is sorted or reverse sorted and either first or last element is picked as pivot.

// Worst complexity: n^2
// Average complexity: n*log(n)
// Best complexity: n*log(n)

const baseArray = [10, -1, 2, 5, 0, 6, 4, -5];

function swap(items, leftIndex, rightIndex) {
  const temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

function quicksort(array) {
  return quickSort(array, 0, array.length - 1);
}

console.log(baseArray);

const newArray = quicksort(baseArray);

console.log(newArray);

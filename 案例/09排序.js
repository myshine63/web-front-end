let arr = [3, 2, 2, 1];

// 冒泡算法O(n2)
function popSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// 选择排序。先找出数组中最小的值，和第一个元素交换位置。然后找出排除第一个元素剩下的数组的最小值和第二个元素交换位置，依次类推On2
function check(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
}

// 插入排序。将数组分为arr1,arr2，且arr1已经排好序。
// 从arr2中取第一个元素，和arr1的最后一个比较，然后交换位置，然后一直交换位置
function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
}

console.log(insert(arr));

// 归并排序.如果两个数组都是有序的，那么可以两边各取一个数比较大小放入新数组。
function mySort(left, right) {
  let res = [];
  while (left.length && right.length) {
    // 取左右数组第一个，比较大小。小的出队列放入新数组，重复执行
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  // 循环结果，会存在一个数组是空数组，另一个数组是非空。需要把他们连接到一起。
  return res.concat(left, right);
}

function merge(arr) {
  // 把数组拆分成只有一个元素或者没有元素的数组
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return mySort(merge(left), merge(right))
}

function quick(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2); // 找出中间位置的序号
  let flag = arr[mid]; // 获取中间的值标记
  let left = [];
  let right = [];
  for (let m = 0; m < arr.length; m++) {
    // 当前的序号不需要比较
    if (m === mid) {
      continue;
    }
    // 小于标记的值放左边
    if (arr[m] < flag) {
      left.push(arr[m])
    } else {
      // 大于标记的值放右边
      right.push(arr[m])
    }
  }
  return quick(left).concat(flag, quick(right))
}




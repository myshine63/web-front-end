let arr = [3, 2, 2, 1];

// 冒泡算法O(n2)
function popSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

console.log(popSort(arr))

// 选择排序。先找出数组中最小的值，和第一个元素交换位置。然后找出排除第一个元素剩下的数组的最小值和第二个元素交换位置，依次类推On2
function check(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    for (let m = 0; m < arr.length - 1; m++) {
      // 默认当前的值是最小的
      let min = arr[m];
      let index = m;
      for (let n = m + 1; n < arr.length; n++) {
        //找出最小的值和他的位置
        if (arr[n] < min) {
          min = arr[n];
          index = n;
        }
      }
      // 当前和后面最小的值交换位置；接着进行下一次轮换
      [arr[index], arr[m]] = [arr[m], arr[index]]
    }
    return arr;
  }
}

// 插入排序。把数组分成前面部分arr1和后面部分arr2.选出arr2的第一个元素，放在arr1合适的位置，然后arr1+1，arr2-1。再执行相同操作
function insert(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    for (let m = 1; m < arr.length; m++) {
      // m位置前面部分为已经好序，m及后面部分为待排序部分
      let value = arr[m];// 当前需要排序的值
      for (let n = m; n >= 0; n--) {
        // 如果拍好序的最后一个元素比当前值大，则把最后一个元素往后面移动一位，依次类推
        if (arr[n - 1] > value) {
          arr[n] = arr[n - 1];
        } else {
          arr[n] = value;
          break;
        }
      }
    }
    return arr
  }
}

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
  if (arr instanceof Array) {
    if (arr.length < 2) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return mySort(merge(left), merge(right))
  }
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

// console.log(quick(arr));


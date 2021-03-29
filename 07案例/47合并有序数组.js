function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];
  while ((i < arr1.length) && (j < arr2.length)) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i++]);
    } else {
      res.push(arr2[j++])
    }
  }
  if (i === arr1.length) {
    return res.concat(arr2.slice(j))
  } else {
    return res.concat(arr2.slice(i))
  }
}

console.log(merge2([1, 3, 5], [2, 4, 5]))

function merge2(arr1, arr2) {
  let res = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      res.push(arr1.shift())
    } else {
      res.push(arr2.shift())
    }
  }
  return res.concat(arr1, arr2)
}


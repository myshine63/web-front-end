var threeSum = function (nums) {
  nums.sort((a, b) => {
    return a - b
  });
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue
    } else {
      let left = i + 1;
      let right = nums.length - 1;
      let a, b, c
      while (left < right) {
        a = nums[i];
        b = nums[left];
        c = nums[right];
        if (a + b + c === 0) {
          res.push([a, b, c]);
          left++
          while (left < right && nums[left] === nums[left - 1]) {
            left++
          }
        } else if (a + b + c < 0) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return res
};

console.log(threeSum([-2, 0, 0, 2, 2]))
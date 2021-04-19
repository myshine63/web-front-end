// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

function count(height) {
  let res = 0;
  let m = 0, n = height.length - 1;
  let water
  while (m < n) {
    water = (n - m) * Math.min(height[m], height[n]);
    if (water > res) {
      res = water
    }
    if (height[m] > height[n]) {
      n--
    } else {
      m++
    }
  }
  return Math.max(water, res);
}

console.log(count([1, 8, 6, 2, 5, 4, 8, 3, 7]))

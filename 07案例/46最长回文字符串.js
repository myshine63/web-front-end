var longestPalindrome = function (s) {
  if (!s || s.length < 2) {
    return s
  }
  let res;
  for (let i = 0; i < s.length; i++) {
    let odd = expandAroundCenter(s, i, i);
    let even = expandAroundCenter(s, i, i + 1);
    let max = odd.length > even.length ? odd : even
    if (!res || max.length > res.length) {
      res = max
    }
  }
  return s.substring(res.left, res.right);
};

function expandAroundCenter(str, left, right) {
  while (left >= 0 && right <= str.length && str.charAt(left) === str.charAt(right)) {
    left--;
    right++;
  }
  let length = right - left - 1;
  return {left: left + 1, right: right, length}
}

console.log(longestPalindrome('abbac'))
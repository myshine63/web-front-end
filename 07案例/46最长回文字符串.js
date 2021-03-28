var longestPalindrome = function (s) {
  if (s === null || s.length < 1) {
    return '';
  }
  let res;
  for (let i = 0; i < s.length; i++) {
    let odd = expandAroundCenter(s, i - 1, i + 1);
    let len = odd.right - odd.left;
    if (!res || (res.right - res.left) < len) {
      res = odd
    }
  }
  return s.substring(res.left, res.right);
};

console.log(longestPalindrome('abbac'))

function expandAroundCenter(str, left, right) {
  while (left >= 0 && right <= str.length && str.charAt(left) === str.charAt(right)) {
    left--;
    right++;
  }
  return {left: left + 1, right: right}
}
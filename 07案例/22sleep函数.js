// 使用while实现
function sleep1(fn, ms) {
  let start = Date.now();
  while (Date.now() - start < ms) {
  }
  fn();
}

// promise实现
function sleep2(ms) {
  
}
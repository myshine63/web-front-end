let BinarySearchTree = require('./06二叉搜索树')

class AVL extends BinarySearchTree {
  constructor() {
    super();
  }

  rotationLL(node) {
    let flag = node.left;
    node.left = flag.right;
    flag.right = node
    return flag
  }

  rotationRR(node) {
    let flag = node.right;
    node.right = flag.left;
    flag.right = node;
    return flag
  }

  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node)
  }

  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  insert(key) {

  }

}

let avl = new AVL;

avl.insert(123);
console.log(avl.getTreeHeight())
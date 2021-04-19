// BST树：也叫二叉搜索树，特点是子节点左边的值比父节点小，右边的值比父节点大

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  compare(key) {
    return this.key > key
  }

  equal(key) {
    return this.key === key;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // 插入节点
  insert(key) {
    if (this.root) {
      this.insertNode(this.root, key);
    } else {
      this.root = new Node(key);
    }
  }

  insertNode(node, key) {
    if (node.compare(key)) {
      if (node.left) {
        this.insertNode(node.left, key)
      } else {
        node.left = new Node(key)
      }
    } else {
      if (node.right) {
        this.insertNode(node.right, key)
      } else {
        node.right = new Node(key)
      }
    }
  }

  preTravel(callback, node = this.root) {
    if (node) {
      callback(node);
      this.preTravel(callback, node.left)
      this.preTravel(callback, node.right)
    }
  }

  // 中序
  midTravel(callback, node = this.root) {
    if (node) {
      this.midTravel(callback, node.left)
      callback(node);
      this.midTravel(callback, node.right)
    }
  }

  // 后序
  postTravel(callback, node = this.root) {
    if (node) {
      this.postTravel(callback, node.left)
      this.postTravel(callback, node.right)
      callback(node);
    }
  }

  searchMinVal(node = this.root) {
    while (node.left) {
      node = node.left
    }
    return node
  }

  searchMaxVal(node = this.root) {
    while (node.right) {
      node = node.right
    }
    return node
  }

  search(key) {
    let res = this.root
    while (res) {
      if (res.equal(key)) {
        return res
      }
      if (res.compare(key)) {
        res = res.left
      } else {
        res = res.right
      }
    }
  }

  remove(target) {
    this.root = this.removeNode(this.root, target)
  }

  removeNode(node, target) {
    if (node === null) {
      return null
    }
    if (node.equal(target)) {
      if (node.left === null && node.right === null) {
        node = null;
        return node
      } else if (node.left === null) {
        node = node.right;
        return node
      } else if (node.right === null) {
        node = node.left;
        return node
      } else {
        let minNode = this.searchMinVal(node.right);
        node.key = minNode.key;
        node.right = this.removeNode(node.right, minNode.key)
        return node;
      }
    } else if (node.compare(target)) {
      node.left = this.removeNode(node.left, target)
      return node
    } else {
      node.right = this.removeNode(node.right, target)
      return node
    }
  }

  getTreeHeight(node = this.root) {
    if (node === null) {
      return -1
    } else {
      return Math.max(this.getTreeHeight(node.left), this.getTreeHeight(node.right)) + 1
    }
  }
}

function logNode(node) {
  if (node) {
    console.log(node)
  }
}

module.exports = BinarySearchTree

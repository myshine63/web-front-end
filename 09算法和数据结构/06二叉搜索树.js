// BST树：也叫二叉搜索树，特点是子节点左边的值比父节点小，右边的值比父节点大
function Node(key) {
  return {
    key,
    left: null,
    right: null
  }
}

function compareFun(node, key) {
  return node.key > key
}

function logNode(node) {
  console.log(node.key)
}

class BinarySearchTree {
  constructor(compareFun, Node) {
    this.compareFun = compareFun;
    this.createNode = Node
    this.root = null
  }

  // 插入节点
  insert(key) {
    if (this.root === null) {
      this.root = this.createNode(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if (this.compareFun(node, key)) {
      if (node.left === null) {
        node.left = this.createNode(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = this.createNode(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  // 先序
  preTravel(node, callback) {
    if (node) {
      callback(node);
      this.preTravel(node.left, callback)
      this.preTravel(node.right, callback)
    }
  }

  // 中序
  midTravel(node, callback) {
    if (node) {
      this.midTravel(node.left, callback)
      callback(node);
      this.midTravel(node.right, callback)
    }
  }

  // 后序
  lastTravel(node, callback) {
    if (node) {
      this.lastTravel(node.left, callback)
      this.lastTravel(node.right, callback)
      callback(node);
    }
  }

  // 遍历的时候可以传入回调方法用来处理node
  preTravelTree(callback) {
    this.preTravel(this.root, callback)
  }

  midTravelTree(callback) {
    this.midTravel(this.root, callback)
  }

  lastTravelTree(callback) {
    this.lastTravel(this.root, callback)
  }

  searchMinVal() {
    let res = this.root;
    while (res.left) {
      res = res.left
    }
    return res
  }

  searchMaxVal() {
    let res = this.root
    while (res.right) {
      res = res.right
    }
    return res
  }

  search(key) {
    let res = this.root
    while (res) {
      if (res.key === key) {
        return res
      } else if (this.compareFun(res, key)) {
        res = res.left
      } else {
        res = res.right
      }
    }
  }
}

let bst = new BinarySearchTree(compareFun, Node);
bst.insert(10);
bst.insert(5);
bst.insert(8);
bst.insert(12);
bst.insert(11);
bst.preTravelTree(logNode)
console.log('-----------')
bst.midTravelTree(logNode)
console.log('-----------')
bst.lastTravelTree(logNode)
console.log(bst.searchMinVal().key, 'min')
console.log(bst.searchMaxVal().key, 'max')
console.log(bst.search(5))

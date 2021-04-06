class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null
  }

  compare(key) {
    return this.key < key
  }

  equal(key) {
    return this.key = key
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (this.root) {
      this.insertNode(this.root, key)
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

  search(key) {
    let res = this.root;
    while (res) {
      if (res.equal(key)) {
        return res
      } else if (res.compare(key)) {
        res = res.left
      } else {
        res = res.right
      }
    }
    return res
  }

  preTravel(callback, node = this.root) {
    if (node) {
      callback(node);
      this.preTravel(callback, node.left);
      this.preTravel(callback, node.right)
    }
  }

  searchMinVal(node = this.root) {
    while (node.left) {
      node = node.left
    }
    return node
  }

  removeNode(node, target) {
    if (node === null) {
      return node
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
        node.right = this.removeNode(node.right, minNode.key);
        return node;
      }
    } else if (node.compare(target)) {
      node.left = this.removeNode(node.left, target);
      return node
    } else {
      node.right = this.removeNode(node.right, target)
      return node
    }
  }

  remove(target) {
    this.root = this.removeNode(this.root, target)
  }
}
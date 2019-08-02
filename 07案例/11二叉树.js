function createTree(arr) {
    let root = {};
    let nodes = [root];// 用来保存节点，默认起始为根节点，且根节点不保存数据
    while (arr.length) {
        let node = nodes.shift(); // 取出一个节点
        let left = {val: arr.shift()}; // 获得一个节点的左右节点
        let right = {val: arr.shift()};
        node.left = left;
        node.right = right;
        nodes.push(left, right); // 把左右节点放入队列
    }
    return root;
}

let root = createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(root);

// 前序
function font(root) {

    if (root.left) {
        font(root.left)
    }
    if (root.right) {
        font(root.right)
    }
    console.log(root.val);
}

font(root);
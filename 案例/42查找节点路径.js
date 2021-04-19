let list = [{
  id: '1',
  value: '四川省',
  children: [{
    id: '11',
    value: '成都市',
    children: [{
      id: '111',
      value: '高新区'
    }, {
      id: '112',
      value: '天府新区'
    }]
  }]
}, {
  id: '2',
  value: '四川省',
  children: [{
    id: '21',
    value: '成都市',
    children: [{
      id: '211',
      value: '高新区'
    }, {
      id: '212',
      value: '天府新区'
    }]
  }]
}];

function fn(list, id) {
  let res = []

  function search(list, res) {
    let searched = false;
    for (let node of list) {
      if (node.id === id) {
        res.push(node.id)
        return true
      } else {
        if (node.children) {
          res.push(node.id)
          searched = search(node.children, res);
          if (searched) {
            return true
          }
        }
      }
    }
    if (!searched) {
      res.pop()
      return false
    }
  }

  search(list, res);
  return res
}

console.log(fn(list, '212'))
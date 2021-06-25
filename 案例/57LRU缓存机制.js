// LRUCache(int num) 初始化缓存容量num
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value)如果关键字已经存在，则变更其数据值；如果关键字不存在,则插入。
// 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
/**
 * @param {number} capacity
 */

class LRUCache {
  constructor(capacity) {
    this.maxCacheNum = capacity;
    this.currentWeight = 0;
    this.cache = new Map();
  }

  get(key) {
    if (this.cache.has(key)) {
      let {value} = this.cache.get(key);
      this.cache.set(key, {
        value, weight: this.currentWeight
      })
      this.currentWeight += 1;
      console.log(value)
      return value
    } else {
      console.log(-1)
      return -1
    }
  }
  
  put(key, value) {
    if (this.cache.size === this.maxCacheNum && !this.cache.has(key)) {
      this.remove();
    }
    this.cache.set(key, {
      value,
      weight: this.currentWeight
    })
    this.currentWeight += 1
  }

  remove() {
    let res;
    for (let [key, val] of this.cache) {
      if (res) {
        if (val.weight < res.weight) {
          res = {
            key,
            weight: val.weight
          }
        }
      } else {
        res = {
          key,
          weight: val.weight
        }
      }
    }
    this.cache.delete(res.key);
  }
}

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = {};
    }
    get(key) {
        if (this.map[key])
            return this.map[key];
        else
            return -1;
    }
    put(key, value) {
        this.map[key] = value;
    }
}
exports.default = () => {
    const lRUCache = new LRUCache(2);
    lRUCache.put(1, 1); // cache is {1=1}
    lRUCache.put(2, 2); // cache is {1=1, 2=2}
    console.log(lRUCache.get(1)); // return 1
    lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    console.log(lRUCache.get(2)); // returns -1 (not found)
    lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    console.log(lRUCache.get(1)); // return -1 (not found)
    console.log(lRUCache.get(3)); // return 3
    console.log(lRUCache.get(4)); // return 4
};

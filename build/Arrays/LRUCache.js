"use strict";
/**
 *  146. LRU CacheConfig
 */
Object.defineProperty(exports, "__esModule", { value: true });
class LRUCache {
    constructor(capacity) {
        this.cache = {};
        this.arr = [];
        this.capacity = capacity;
    }
    get(key) {
        if (this.cache[key] !== undefined) {
            this.moveKeyToEnd(key);
            return this.cache[key];
        }
        else
            return -1;
    }
    put(key, value) {
        // If key is found, then replace value then
        // update key position to most recently used
        if (this.cache[key] !== undefined) {
            this.cache[key] = value;
            this.moveKeyToEnd(key);
            return;
        }
        // If key is not found, then two options:
        // 1. If capacity available, then simply insert
        // 2. If no more capacity, then evict then insert
        if (this.arr.length < this.capacity) {
            this.arr.push(key);
            this.cache[key] = value;
        }
        else {
            let evicted = this.arr.shift();
            this.cache[evicted] = undefined;
            this.arr.push(key);
            this.cache[key] = value;
        }
    }
    moveKeyToEnd(key) {
        let index = this.arr.indexOf(key);
        let num = this.arr.splice(index, 1);
        this.arr.push(num[0]);
    }
}
exports.default = () => {
    const capacity = 3;
    const cache = new LRUCache(capacity);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3);
    cache.put(4, 4);
    cache.get(4);
    cache.get(3);
    cache.get(2);
    cache.get(1);
    cache.put(5, 5);
    cache.get(1);
    cache.get(2);
    cache.get(3);
    cache.get(4);
    cache.get(5);
    console.log(cache.cache);
    console.log(cache.arr);
};

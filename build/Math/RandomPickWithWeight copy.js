"use strict";
/**
 *  204. Count Primes
 */
Object.defineProperty(exports, "__esModule", { value: true });
class SolutionMine {
    constructor(w) {
        this.totalWeight = w.reduce((acc, curr) => acc + curr);
        this.weights = w;
    }
    pickIndex() {
        let num = this.getRandomInt() + 1;
        for (let i = 0; i < this.weights.length; i++) {
            let weight = this.weights[i];
            num -= weight;
            if (num <= 0)
                return i;
        }
    }
    getRandomInt() {
        return Math.floor(Math.random() * this.totalWeight);
    }
}
class Solution {
    constructor(w) {
        this.weights = new Map();
        this.sum = 0;
        for (let i = 0; i < w.length; i++) {
            this.sum += w[i];
            this.weights.set(this.sum, i); //
        }
    }
    pickIndex() {
        let index = Math.floor(Math.random() * this.sum);
        for (let currSum of this.weights.keys()) {
            if (index < currSum)
                return this.weights.get(currSum);
        }
    }
    getRandomInt() {
        return Math.floor(Math.random() * this.sum);
    }
}
exports.default = () => {
    // var obj1 = new Solution([1,3])
    // console.log(obj1.pickIndex())
    // console.log(obj1.pickIndex())
    // console.log(obj1.pickIndex())
    // console.log(obj1.pickIndex())
    var obj2 = new Solution([1, 1, 3, 1]);
    console.log(obj2.pickIndex());
    // console.log(obj2.pickIndex())
    // console.log(obj2.pickIndex())
    // console.log(obj2.pickIndex())
};

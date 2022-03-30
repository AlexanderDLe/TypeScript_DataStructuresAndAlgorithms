"use strict";
/**
  339. Nested List Weight Sum
*/
Object.defineProperty(exports, "__esModule", { value: true });
class NestedInteger {
    // If value is provided, then it holds a single integer
    // Otherwise it holds an empty nested list
    constructor(value) {
        if (value)
            this.value = value;
        this.nestedList = [];
    }
    ;
    // Return true if this NestedInteger holds a single integer, rather than a nested list.
    isInteger() {
        return !!this.value;
    }
    ;
    // Return the single integer that this NestedInteger holds, if it holds a single integer
    // Return null if this NestedInteger holds a nested list
    getInteger() {
        return this.value ? this.value : null;
    }
    ;
    // Set this NestedInteger to hold a single integer equal to value.
    setInteger(value) {
        this.value = value;
    }
    ;
    // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
    add(elem) {
        this.nestedList.push(elem);
    }
    ;
    // Return the nested list that this NestedInteger holds,
    // or an empty list if this NestedInteger holds a single integer
    getList() {
        return this.value ? [] : this.nestedList;
    }
    ;
}
;
const depthSum = (nestedList) => {
    const recurse = (list, level) => {
        let sum = 0;
        for (let item of list) {
            if (item.isInteger())
                sum += item.getInteger() * level;
            else
                sum += recurse(item.getList(), level + 1);
        }
        return sum;
    };
    return recurse(nestedList, 1);
};
exports.default = () => {
    let n3 = new NestedInteger();
    n3.add(new NestedInteger(6));
    let n2 = new NestedInteger();
    n2.add(new NestedInteger(4));
    n2.add(n3);
    let n1 = new NestedInteger();
    n1.add(new NestedInteger(1));
    console.log(depthSum([n1, n2]));
};

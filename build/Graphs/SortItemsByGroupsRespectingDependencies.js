"use strict";
/**
 * 1203. Sort Items by Group Respecting Dependencies
 *
 *  n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
 *
 * 6 > 3 > 4 > 1 > 5 > 2 > 0 > 7
 * 0   0   0  -1   1   1  -1  -1
 */
Object.defineProperty(exports, "__esModule", { value: true });
const sortItems = (n, m, group, beforeItems) => {
    const initializeGraph = (n) => {
        let graph = [];
        for (let i = 0; i < n; i++) {
            graph.push(new Array());
        }
        return graph;
    };
    const initializeGraphSet = (num) => {
        let graph = [];
        for (let i = 0; i < num; i++) {
            graph.push(new Set());
        }
        return graph;
    };
    const topSort = (graph, inDegrees) => {
        let result = [];
        let queue = [];
        let len = inDegrees.length;
        for (let i = 0; i < len; i++) {
            if (inDegrees[i] === 0)
                queue.push(i);
        }
        while (queue.length) {
            let curr = queue.shift();
            result.push(curr);
            let children = graph[curr];
            for (let child of children) {
                inDegrees[child]--;
                if (!inDegrees[child])
                    queue.push(child);
            }
        }
        for (let i = 0; i < len; i++) {
            if (inDegrees[i] > 0)
                return [];
        }
        return result;
    };
    for (let i = 0; i < n; i++) {
        if (group[i]) {
            group[i] = m++;
        }
    }
    let groupGraph = initializeGraphSet(m);
    let itemGraph = initializeGraphSet(n);
    let groupInDegrees = new Array(m).fill(0);
    let itemInDegrees = new Array(n).fill(0);
    let result = [];
    for (let i = 0; i < n; i++) {
        let to = group[i];
        for (let parent of beforeItems[i]) {
            let from = group[parent];
            if (from !== to && !groupGraph[from].has(to)) {
                groupGraph[from].add(to);
                groupInDegrees[to]++;
            }
            if (!itemGraph[parent].has(i)) {
                itemGraph[parent].add(i);
                itemInDegrees[i]++;
            }
        }
    }
    let groupOrder = topSort(groupGraph, groupInDegrees);
    let itemOrder = topSort(itemGraph, itemInDegrees);
    if (!groupOrder || !itemOrder)
        return [];
    let group2Item = initializeGraph(m);
    for (let item of itemOrder)
        group2Item[group[item]].push(item);
    for (let group_id of groupOrder) {
        for (let item of group2Item[group_id]) {
            result.push(item);
        }
    }
    return result;
};
exports.default = () => {
    console.log(sortItems(8, 2, [-1, -1, 1, 0, 0, 1, 0, -1], [[], [6], [5], [6], [3, 6], [], [], []]));
};

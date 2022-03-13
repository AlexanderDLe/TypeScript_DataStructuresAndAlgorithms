"use strict";
/**
 * 207. Course Schedule
 */
Object.defineProperty(exports, "__esModule", { value: true });
const canFinishA = (numCourses, prerequisites) => {
    let map = {};
    let prereqs = prerequisites;
    let unlocked = [];
    for (let prereq of prereqs) {
        if (map[prereq[0]])
            map[prereq[0]].push(prereq[1]);
        else
            map[prereq[0]] = [prereq[1]];
    }
    for (let prereq of prereqs) {
        if (!map.hasOwnProperty(prereq[1]))
            unlocked.push(prereq[1]);
    }
    while (unlocked.length) {
        let num = unlocked.pop();
        for (let item in map) {
            if (map[item].includes(num)) {
                let index = map[item].indexOf(num);
                map[item].splice(index, 1);
                if (!map[item].length) {
                    unlocked.push(Number(item));
                    delete map[item];
                }
            }
        }
    }
    return Object.keys(map).length ? false : true;
};
/**
 * Array/Stack Method:
 *
 * Create an array (inDegree) that keeps track of how many prerequisites each course has.
 * If a course has a inDegree of 0, then push that course onto the stack.
 *
 * While stack contains items: increment a count, pop an item, and see if that item can unlock
 * any courses by decrementing the inDegree array. Continue until finished.
 *
 * If count matches numCourses, then return true.
 */
const canFinishB = (numCourses, prerequisites) => {
    let inDegree = new Array(numCourses).fill(0);
    let stack = [];
    let count = 0;
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
    }
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0)
            stack.push(i);
    }
    while (stack.length) {
        let curr = stack.pop();
        count++;
        for (let i = 0; i < prerequisites.length; i++) {
            let preq = prerequisites[i];
            if (preq[1] === curr) {
                inDegree[preq[0]]--;
                if (!inDegree[preq[0]]) {
                    stack.push(preq[0]);
                }
            }
        }
    }
    return count == numCourses;
};
const canFinish = (numCourses, prerequisites) => {
    const courses = [];
    for (let i = 0; i < numCourses; i++)
        courses.push(i);
    const sources = new Set(courses);
    const inDegrees = {};
    const parents = {};
    for (let [parent, child] of prerequisites) {
        inDegrees[child] = (inDegrees[child] || 0) + 1;
        if (sources.has(child))
            sources.delete(child);
        if (!parents[parent])
            parents[parent] = [];
        parents[parent].push(child);
    }
    const queue = Array.from(sources);
    let courseCount = 0;
    while (queue.length) {
        courseCount++;
        let vertex = queue.shift();
        let childrenVertices = parents[vertex];
        if (!childrenVertices)
            continue;
        for (let child of childrenVertices) {
            inDegrees[child]--;
            if (!inDegrees[child])
                queue.push(child);
        }
    }
    return courseCount === numCourses;
};
exports.default = () => {
    const numCourses = 3;
    const prerequisites = [
        [1, 0],
        [1, 2],
        [0, 2]
    ];
    console.log(canFinish(numCourses, prerequisites));
    console.log(canFinish(2, [[1, 0]]));
    console.log(canFinish(2, [[1, 0], [0, 1]]));
};

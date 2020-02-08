/**
 * 207. Course Schedule
 */

import { PrintArray, PrintMatrix, PrintObject } from '../utils/Utilities';
import { DefaultSerializer } from 'v8';

/**
 * Map Method:
 *
 * Use a map (object) to keep track of the prerequisites for each course.
 * While there are any unlocked courses available, you can iterate through
 * the map and unlock courses by removing that prerequisite from an array.
 *
 * When an array is empty, then the corresponding key (course) becomes available.
 * You can then remove that item from the map and push the key onto the unlocked array.
 */
type Map = { [key: number]: number[] };
const canFinish = (numCourses: number, prerequisites: number[][]): boolean => {
    let map: Map = {};
    let prereqs = prerequisites;
    let unlocked: number[] = [];

    for (let prereq of prereqs) {
        if (map[prereq[0]]) map[prereq[0]].push(prereq[1]);
        else map[prereq[0]] = [prereq[1]];
    }
    for (let prereq of prereqs) {
        if (!map.hasOwnProperty(prereq[1])) unlocked.push(prereq[1]);
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
const canFinishB = (numCourses: number, prerequisites: number[][]): boolean => {
    let inDegree: number[] = new Array(numCourses).fill(0);
    let stack: number[] = [];
    let count = 0;

    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
    }
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) stack.push(i);
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

export default () => {
    const numCourses = 3;
    const prerequisites = [
        [1, 0],
        [1, 2],
        [0, 2]
    ];
    console.log(canFinishB(numCourses, prerequisites));
};

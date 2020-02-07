"use strict";
/**
 * 207. Course Schedule
 *
 * Use a map (object) to keep track of the prerequisites for each course.
 * While there are any unlocked courses available, you can iterate through
 * the map and unlock courses by removing that prerequisite from an array.
 *
 * When an array is empty, then the corresponding key (course) becomes available.
 * You can then remove that item from the map and push the key onto the unlocked array.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const canFinish = (numCourses, prerequisites) => {
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
exports.default = () => {
    const numCourses = 2;
    const prerequisites = [
        [1, 0],
        [1, 2],
        [0, 2]
    ];
    console.log(canFinish(numCourses, prerequisites));
};

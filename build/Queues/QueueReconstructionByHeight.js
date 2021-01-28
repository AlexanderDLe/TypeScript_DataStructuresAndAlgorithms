"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 406. Queue Reconstruction By Height
 */
const Utilities_1 = require("../utils/Utilities");
const reconstructPeople = (people) => {
    let result = [];
    people.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));
    people.forEach(person => {
        result.splice(person[1], 0, person);
    });
    return result;
};
const reconstructPeopleB = (people) => {
    let result = [];
    people.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));
    people.forEach(person => {
        result.splice(person[1], 0, person);
    });
    return result;
};
exports.default = () => {
    const people = [
        [7, 0],
        [4, 4],
        [7, 1],
        [5, 0],
        [6, 1],
        [5, 2]
    ];
    Utilities_1.PrintMatrix(reconstructPeople(people));
};

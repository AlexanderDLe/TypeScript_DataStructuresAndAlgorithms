"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoeingPlane = void 0;
class BoeingPlane {
    constructor() {
        this.name = 'Boeing';
    }
    getName() {
        return this.name;
    }
    land() {
        return `${this.name} is landing...`;
    }
    fly() {
        return `${this.name} is flying...`;
    }
}
exports.BoeingPlane = BoeingPlane;

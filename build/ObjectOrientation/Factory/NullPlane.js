"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullPlane = void 0;
class NullPlane {
    constructor() {
        this.name = 'none';
    }
    getName() {
        return this.name;
    }
    land() {
        return ``;
    }
    fly() {
        return ``;
    }
}
exports.NullPlane = NullPlane;

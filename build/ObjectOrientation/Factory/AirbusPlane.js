"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirbusPlane = void 0;
class AirbusPlane {
    constructor() {
        this.name = 'Airbus';
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
exports.AirbusPlane = AirbusPlane;

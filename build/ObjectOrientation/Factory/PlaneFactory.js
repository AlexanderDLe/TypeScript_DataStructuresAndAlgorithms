"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaneFactory = void 0;
const NullPlane_1 = require("./NullPlane");
const BoeingPlane_1 = require("./BoeingPlane");
const AirbusPlane_1 = require("./AirbusPlane");
const nullPlane = new NullPlane_1.NullPlane();
class PlaneFactory {
    static getPlaneInstance(type) {
        switch (type) {
            case 'boeing': return new BoeingPlane_1.BoeingPlane();
            case 'airbus': return new AirbusPlane_1.AirbusPlane();
            default: return nullPlane;
        }
    }
}
exports.PlaneFactory = PlaneFactory;

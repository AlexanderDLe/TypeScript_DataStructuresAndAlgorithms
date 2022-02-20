"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlaneFactory_1 = require("./PlaneFactory");
exports.default = () => {
    const planeFactory = new PlaneFactory_1.PlaneFactory();
    const boeingPlane1 = PlaneFactory_1.PlaneFactory.getPlaneInstance('boeing');
    const boeingPlane2 = PlaneFactory_1.PlaneFactory.getPlaneInstance('boeing');
    const airbusPlane1 = PlaneFactory_1.PlaneFactory.getPlaneInstance('airbus');
    console.log(boeingPlane1.fly());
    console.log(boeingPlane2.fly());
    console.log(airbusPlane1.fly());
};

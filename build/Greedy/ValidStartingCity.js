"use strict";
/**
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const validStartingCity = (distances, fuel, mpg) => {
    const startTravel = (index) => {
        let currFuel = 0;
        // Go from index to end
        for (let i = index; i < distances.length; i++) {
            currFuel += fuel[i] * mpg;
            if (currFuel < distances[i])
                return false;
            currFuel -= distances[i];
        }
        // Go from start to index
        for (let i = 0; i < index; i++) {
            currFuel += fuel[i] * mpg;
            if (currFuel < distances[i])
                return false;
            currFuel -= distances[i];
        }
        return true;
    };
    for (let i = 0; i < distances.length; i++) {
        if (startTravel(i))
            return i;
    }
    return -1;
};
exports.default = () => {
    const distances = [5, 25, 15, 10, 15];
    const fuel = [1, 2, 1, 0, 3];
    const mpg = 10;
    console.log(validStartingCity(distances, fuel, mpg));
};

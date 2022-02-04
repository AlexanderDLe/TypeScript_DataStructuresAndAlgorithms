/**
 *  
*/

import { PrintArray, PrintMatrix, PrintObject } from "../utils/Utilities";

const validStartingCity = (distances: number[], fuel: number[], mpg: number): number => {
    const startTravel = (index: number): boolean => {
        let currFuel = 0;

        // Go from index to end
        for (let i = index; i < distances.length; i++) {
            currFuel += fuel[i] * mpg;
            if (currFuel < distances[i]) return false;
            currFuel -= distances[i];
        }
        
        // Go from start to index
        for (let i = 0; i < index; i++) {
            currFuel += fuel[i] * mpg;
            if (currFuel < distances[i]) return false;
            currFuel -= distances[i];
        }

        return true;
    }

    for (let i = 0; i < distances.length; i++) {
        if (startTravel(i)) return i;
    }

    return -1;
}

export default () => {
    const distances = [5, 25, 15, 10, 15];      
    const fuel = [1, 2, 1, 0, 3];      
    const mpg = 10;
    console.log(validStartingCity(distances, fuel, mpg))
};

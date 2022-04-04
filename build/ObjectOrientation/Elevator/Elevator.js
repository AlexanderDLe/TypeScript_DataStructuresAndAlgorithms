"use strict";
/*
  Requirements:
  1. Elevator has 3 states: Upward, Downward, Idle
  2. Transfers passengers from one floor to another
  3. Open when idle at a floor
  4. 200 floors + 50 elevators
  5. Specs of elevators
    > passengers
    > maxLoad
    > maxSpeed
  6. Minimize
    > Wait time of system
    > Wait time of passenger
  7. Throughput
  8. Power usage

  Actors/Objects:
  1. Passengers
  2. Elevator Cars
  3. Floors
  4. Doors
  5. Button Panels
    > Interior Panel
    > Exterior Panel
  6. Dispatcher
  7. Elevator System

  Use Cases:
  1. Calling the elevator
  2. Move/Stop elevator
  3. Open/Close door
  4. Indicate Elevator Direction
  5. Indicate Elevator Floor

  Dispatch Behavior
  1. Dispatcher must seek best elevator
    >
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    console.log('elevator');
};

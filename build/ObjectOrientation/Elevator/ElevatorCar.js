"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElevatorCar = void 0;
var ElevatorState;
(function (ElevatorState) {
    ElevatorState[ElevatorState["up"] = 0] = "up";
    ElevatorState[ElevatorState["down"] = 1] = "down";
    ElevatorState[ElevatorState["stop"] = 2] = "stop";
})(ElevatorState || (ElevatorState = {}));
var DoorState;
(function (DoorState) {
    DoorState[DoorState["open"] = 0] = "open";
    DoorState[DoorState["closed"] = 1] = "closed";
    DoorState[DoorState["isOpening"] = 2] = "isOpening";
    DoorState[DoorState["isClosing"] = 3] = "isClosing";
})(DoorState || (DoorState = {}));
class ElevatorCar {
    move() { }
    stop() { }
}
exports.ElevatorCar = ElevatorCar;

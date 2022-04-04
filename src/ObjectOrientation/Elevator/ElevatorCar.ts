enum ElevatorState {
  up,
  down,
  stop
}

enum DoorState {
  open,
  closed,
  isOpening,
  isClosing
}

export class ElevatorCar {
  state: ElevatorState;
  doorState: DoorState;
  capacity: number;

  move(){}
  stop(){}
}
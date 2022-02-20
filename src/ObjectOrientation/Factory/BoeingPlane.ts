import { Plane } from './PlaneInterface';

export class BoeingPlane implements Plane {
  private name: string;

  constructor() {
    this.name = 'Boeing';
  }
  
  getName() {
    return this.name
  }

  land(): string {
    return `${this.name} is landing...`;
  }

  fly(): string {
    return `${this.name} is flying...`;
  }
}
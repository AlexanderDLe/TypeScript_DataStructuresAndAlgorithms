import { Plane } from './PlaneInterface';

export class AirbusPlane implements Plane {
  private name: string;

  constructor() {
    this.name = 'Airbus';
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
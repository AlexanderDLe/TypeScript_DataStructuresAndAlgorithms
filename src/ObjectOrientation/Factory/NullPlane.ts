import { Plane } from './PlaneInterface';

export class NullPlane implements Plane {
  private name: string;

  constructor() {
    this.name = 'none';
  }
  
  getName() {
    return this.name
  }

  land(): string {
    return ``;
  }

  fly(): string {
    return ``;
  }
}
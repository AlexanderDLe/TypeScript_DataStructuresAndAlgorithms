import { Plane } from './PlaneInterface';
import { NullPlane } from './NullPlane';
import { BoeingPlane } from './BoeingPlane';
import { AirbusPlane } from './AirbusPlane';
const nullPlane = new NullPlane();

export type Planes = 'boeing' | 'airbus';

export class PlaneFactory {
  static getPlaneInstance(type: Planes): Plane {
    switch (type) {
      case 'boeing': return new BoeingPlane();
      case 'airbus': return new AirbusPlane();
      default: return nullPlane;
    }
  }
}
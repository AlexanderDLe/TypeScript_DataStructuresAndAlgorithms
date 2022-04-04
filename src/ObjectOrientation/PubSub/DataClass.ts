import {Subscribable} from './SubscribableClass';

export class DataClass extends Subscribable<number> {
  constructor(public value: number) {
    super();
  }

  setValue(v:number) {
    this.value = v;
    this.publish(v);
  }
}

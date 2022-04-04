import {Subscribable} from './SubscribableClass';
import { DataClass } from './DataClass';

export default () => {
  const sub = new Subscribable<string>();
  const unsub = sub.subscribe(console.log);
  sub.publish('Hello');
  sub.publish('Whatever');
  unsub();
  sub.publish('Bye');

  const dc = new DataClass(0);
  const dcUnsub = dc.subscribe((v:number) => console.log(`D: ${v}`));
  const dcUnsub2 = dc.subscribe((v:number) => console.log(`D: ${v * 2}`));
  dc.setValue(42);
  dcUnsub();
  dcUnsub2();
}
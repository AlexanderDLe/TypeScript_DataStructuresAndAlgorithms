/**
 * 636. Exclusive Time of Functions
 * 

    0:start:0
    0:start:2
    0:end:5
    1:start:6
    1:end:6
    0:end:7
    
    _______________________________________    

    0:start:0
    
    prevTime: 0
    stack: [0]    <---- stack is empty. we can just push onto stack.
    _______________________________________    
    
    0:start:2
    ^       ^
    id      time

    
    stack: [0, 0]    <--- Since stack is not empty, we should
                          add the time between prev function until now.
                          Set prevTime to new time.
    
    prevTime: 2
    result = [2]

    _______________________________________    
    
    0:end:5         <--- This function ends, so we must remove from stack.
    
    prevTime: 2
    stack: [0]      <-- Popped 0 (ID to update)
    
    We should record this time in a result array and update prevTime.
    result[ID] += (time - prevTime + 1) = 3
                                     ^
                                      \___INCLUSIVE
    2 + (5 - 2 + 1) = 6
    
    result = [6]
    prevTime: 7   <--- Set time to be next block (time + 1)
    _______________________________________    
    
    1:start:6
    
    prevTime: 5
    stack: [0, 1]   <-- Push new function ID

    result = [5]
    _______________________________________    
    


*/


import InsertInterval from '../Intervals/InsertInterval';
import { PrintArray } from '../utils/Utilities';

const exclusiveTimeRef = (n:number, logs:string[]): number[] => {
  const result:number[] = new Array(n).fill(0);
  const stack: number[] = [];
  let prevTime = 0;

  console.log(`------------`)
  console.log(`stack: ${stack} | result: ${result}`)
  for (let log of logs) {
    let details = log.split(':');
    let id = parseInt(details[0]);
    let point = details[1];
    let time = parseInt(details[2]);
    if (point === 'start') {
      
      if (stack.length) {
        let prevFN = stack[stack.length - 1];
        result[prevFN] += (time - prevTime);
      }
      
      stack.push(id);
      prevTime = time;
    } else {
      const last = stack.pop();

      // We add 1 because this is inclusive.
      // eg. Time ending at 5 = 0, 1, 2, 3, 4, 5
      result[last] += (time - prevTime + 1);

      // We add 1 here because we want to start at the next
      // time block.
      prevTime = time + 1;
    }
    console.log(`------------`)
    console.log(`log: ${log} | prevTime: ${prevTime}`)
    console.log(`stack: ${stack} | result: ${result}`)
  }  
  
  return result;
}

const exclusiveTimeA = (n:number, logs:string[]): number[] => {
  const result: number[] = new Array(n).fill(0);
  const stack: number[] = [];
  let prevTime = 0;

  for (let log of logs) {
    let data = log.split(':');
    let ID = Number(data[0]);
    let time = Number(data[2]);
    let point = data[1];

    if (point === 'start') {
      // If we're starting a new function and a function is already running,
      // add to the time sum of the currently-running function.
      if (stack.length) {
        let top = stack[stack.length - 1];
        result[top] += (time - prevTime);
      }
      stack.push(ID);
      prevTime = time;
    } 

    if (point === 'end') {
      let top = stack.pop();
      result[top] += (time - prevTime + 1);
      prevTime = time + 1;
    }
  }



  return result;
}

const exclusiveTime = (n:number, logs:string[]): number[] => {
  const result = new Array(n).fill(0);
  const stack: number[] = []
  let prevTime = 0;
  
  for (let log of logs) {
    let detail = log.split(':');
    let ID = Number(detail[0]);
    let point = detail[1];
    let time = Number(detail[2]);

    /*
      1   2     2
      |   |     |
          ^--- At this point, you should save the time for the previous function.
          
    */
    if (point === 'start') {
      if (stack.length) {
        let prevID = stack[stack.length - 1];
        result[prevID] += time - prevTime;
      }
      stack.push(ID);
      prevTime = time;
    }

    if (point === 'end') {
      let topID = stack.pop();
      result[topID] += (time - prevTime + 1);
      prevTime = time + 1;
    }
  }

  return result;
}

export default () => {
  // PrintArray(exclusiveTime(2, [
  //   "0:start:0",
  //   "1:start:2",
  //   "1:end:5",
  //   "0:end:6"
  // ]));

  // PrintArray(exclusiveTime(1, [
  //   "0:start:0",
  //   "0:start:2",
  //   "0:end:5",
  //   "0:start:6",
  //   "0:end:6",
  //   "0:end:7"
  // ]));
  PrintArray(exclusiveTime(2, [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "1:start:6",
    "1:end:6",
    "0:end:7"
  ]));
};

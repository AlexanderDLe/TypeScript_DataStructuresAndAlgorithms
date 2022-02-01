/**
 * 739. Daily Temperatures
 */
import { PrintArray } from '../utils/Utilities';


export class MinMaxStack {
    minStack: number[];
    maxStack: number[];
    stack: number[];

    constructor() {
        this.minStack = [];
        this.maxStack = [];
        this.stack = [];
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
  
    pop() {
        let num = this.stack.pop();
        let min = this.minStack[this.minStack.length - 1];
        let max = this.maxStack[this.maxStack.length - 1];

        if (num === min) this.minStack.pop();
        if (num === max) this.maxStack.pop();

        return num;
    }
  
    push(number: number) {
        this.stack.push(number);
        if (!this.minStack.length || number <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(number);
        }
        if (!this.maxStack.length || number >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(number);
        }
    }
  
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
  
    getMax() {
        
        return this.maxStack[this.maxStack.length - 1];
    }
  }

export default () => {
    let stack = new MinMaxStack();
    stack.push(5);
    console.log(stack.getMin());
    console.log(stack.peek());
    stack.push(7);
    console.log(stack.getMin());
    console.log(stack.getMax());
    console.log(stack.peek());
    stack.push(2);
    console.log(stack.getMin());
    console.log(stack.getMax());
    console.log(stack.peek());
    stack.pop();
    stack.pop();
    console.log(stack.getMin());
    console.log(stack.getMax());
    console.log(stack.peek());
};

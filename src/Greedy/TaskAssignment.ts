/**
*/

import { PrintArray, PrintMatrix, PrintObject } from "../utils/Utilities";

const taskAssignment = (k: number, tasks: number[]): number[][] => {
    let tasksOrder: any[] = [];

    for (let i = 0; i < tasks.length; i++) {
        let taskLen = tasks[i];
        tasksOrder.push({taskIndex: i, taskLen: taskLen})
    }

    tasksOrder = tasksOrder.sort((a, b) => a.taskLen - b.taskLen);
    
    let result: number[][] = []
    
    let L = 0, R = tasks.length - 1;
    while (L < R) {
        let LTask = tasksOrder[L];
        let RTask = tasksOrder[R];
        result.push([LTask.taskIndex, RTask.taskIndex]);
        L++, R--;
    }

    return result;
}

export default () => {
    const k = 3;
    const tasks = [1, 3, 5, 3, 1, 4];      
    console.log(taskAssignment(k, tasks))
};

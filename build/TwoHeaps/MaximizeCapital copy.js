"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Grokking the Coding Interview
 *
 *  Project Capitals=[0,1,2,3]
 *  Project Profits=[1,2,3,5]
 *  Initial Capital=0
 *  Number of Projects=3
 *
 *  While we can still take more projects, we want to take the
 *  greatest profiting project at our available capital.
 *
 **************************************************************
 *
 *  We can use a minHeap to track the lowest costing project:
 *
 *  lowestCostHeap = [
 *      {cost: 0, profit: 1}
 *      {cost: 1, profit: 2}
 *      {cost: 2, profit: 3}
 *      {cost: 3, profit: 5}
 *  ]
 *
 *  However, we'll also need to keep a prev variable to compare
 *  the next project to see if it is more profitable yet affordable.
 *
 *  If the next project is affordable, save the current project
 *  into another heap for later use if necessary and save the next
 *  project to prev instead. Repeat until we find the best option.
 *
 **************************************************************
 *
 *  numOfProjects = 3 | capital = 0
 *
 *  prev = {cost: 0, profit: 1}
 *
 *  lowestCostHeap = [
 *      {cost: 1, profit: 2}
 *      {cost: 2, profit: 3}
 *      {cost: 3, profit: 5}
 *  ]
 *
 *  Let us compare prev to the next project:
 *  The cost of the next project is too high, therefore we use prev.
 *  Add profit to capital.
 *
 **************************************************************
 *
 *  numOfProjects = 2 | capital = 1
 *
 *  prev = {cost: 1, profit: 2}
 *
 *  lowestCostHeap = [
 *      {cost: 2, profit: 3}
 *      {cost: 3, profit: 5}
 *  ]
 *
 *  Let us compare prev to the next project:
 *  The cost of the next project is too high, therefore we use prev.
 *  Add profit to capital.
 *
 **************************************************************
 *
 *  numOfProjects = 1 | capital = 3
 *
 *  prev = {cost: 2, profit: 3}
 *
 *  lowestCostHeap = [
 *      {cost: 3, profit: 5}
 *  ]
 *
 *  Let us compare prev to the next project:
 *  With our current capital, we can afford the next project.
 *  Therefore, we will store the prev into a a highestProfitHeap and use next.
 *
 *  prev = {cost: 3, profit: 5}
 *
 *  lowestCostHeap = [
 *  ]
 *
 *  highestProfitArr = [       <-- We use an array because we can push projects
 *      {cost: 2, profit: 3}       and use pop to get most recently pushed project,
 *  ]                              which should be highest profit.
 *
 *  Let us compare prev to the next project:
 *  There is no next project. Add profit to capital.
 *
 *  Also, since lowestCostHeap is now empty, we now use highestProfitHeap
 *  and select whatever pops first.
*/
let Heap = require('collections/heap');
class Project {
    constructor(cost, profit) {
        this.cost = cost;
        this.profit = profit;
    }
}
const maximizeCapital = (capital, profits, numberOfProjects, initialCapital) => {
    const lowestCostSort = (a, b) => {
        return b.cost - a.cost;
    };
    let result = initialCapital;
    let lowestCostHeap = new Heap([], null, lowestCostSort);
    let highestProfitArr = [];
    for (let i = 0; i < capital.length; i++) {
        lowestCostHeap.push(new Project(capital[i], profits[i]));
    }
    while (numberOfProjects) {
        let project;
        // Determine which project to use
        if (!lowestCostHeap.length) {
            project = highestProfitArr.pop();
        }
        else {
            project = lowestCostHeap.pop();
            while (lowestCostHeap.length) {
                let next = lowestCostHeap.peek();
                // If we can't afford next project, then break
                if (next.cost > result)
                    break;
                // If next is the better option, then store project and use next
                if (project.cost < next.cost) {
                    highestProfitArr.push(project);
                    project = lowestCostHeap.pop();
                    // If project is the better option, then use project
                }
                else {
                    break;
                }
            }
            // Once we have project we like, we can add it to capital
            result += project.profit;
        }
        numberOfProjects--;
    }
    return result;
};
exports.default = () => {
    let capitals1 = [0, 1, 2];
    let projects1 = [1, 2, 3];
    let initialCapital1 = 1;
    let numberOfProjects1 = 2;
    let capitals2 = [0, 1, 2, 3];
    let projects2 = [1, 2, 3, 5];
    let initialCapital2 = 0;
    let numberOfProjects2 = 3;
    console.log(maximizeCapital(capitals1, projects1, numberOfProjects1, initialCapital1));
    console.log(maximizeCapital(capitals2, projects2, numberOfProjects2, initialCapital2));
};

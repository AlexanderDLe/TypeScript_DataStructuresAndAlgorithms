"use strict";
/**
 * AlgoExpert
 */
Object.defineProperty(exports, "__esModule", { value: true });
class MinHeap {
    constructor(array) {
        this.getParentIndex = (index) => Math.floor((index - 1) / 2);
        this.getLeftChildIndex = (index) => index * 2 + 1;
        this.getRightChildIndex = (index) => {
            console.log(this.heap);
            return index * 2 + 2;
        };
        if (!array)
            return;
        this.vertexMap = {};
        for (let i = 0; i < array.length; i++) {
            this.vertexMap[i] = i;
        }
        this.heap = this.buildHeap(array);
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    buildHeap(array) {
        let firstParentIndex = Math.floor((array.length - 2) / 2);
        for (let currIndex = firstParentIndex; currIndex >= 0; currIndex--) {
            this.siftDown(currIndex, array.length - 1, array);
        }
        return array;
    }
    siftDown(currIndex, endIndex, heap) {
        let leftChildIndex = this.getLeftChildIndex(currIndex);
        while (leftChildIndex <= endIndex) {
            let rightChildIndex = this.getRightChildIndex(currIndex) <= endIndex
                ? this.getRightChildIndex(currIndex)
                : -1;
            let indexToSwap;
            if (rightChildIndex !== -1 && heap[rightChildIndex][1] < heap[leftChildIndex][1]) {
                indexToSwap = rightChildIndex;
            }
            else {
                indexToSwap = leftChildIndex;
            }
            if (heap[indexToSwap][1] < heap[currIndex][1]) {
                this.swap(currIndex, indexToSwap);
                currIndex = indexToSwap;
                leftChildIndex = currIndex * 2 + 1;
            }
            else {
                return;
            }
        }
    }
    siftUp(currIndex, heap) {
        let parentIndex = this.getParentIndex(currIndex);
        while (currIndex > 0 && heap[currIndex][1] < heap[parentIndex][1]) {
            this.swap(currIndex, parentIndex);
            currIndex = parentIndex;
            parentIndex = this.getParentIndex(currIndex);
        }
    }
    remove() {
        if (this.isEmpty())
            return;
        this.swap(0, this.heap.length - 1);
        const [vertex, distance] = this.heap.pop();
        delete this.vertexMap[vertex];
        this.siftDown(0, this.heap.length - 1, this.heap);
        return [vertex, distance];
    }
    swap(i, j) {
        let heap = this.heap;
        this.vertexMap[heap[i][0]] = j;
        this.vertexMap[heap[j][0]] = i;
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }
    update(vertex, value) {
        this.heap[this.vertexMap[vertex]] = [vertex, value];
        this.siftUp(this.vertexMap[vertex], this.heap);
    }
}
const dijkstrasAlgorithmArray = (start, edges) => {
    const numberOfVertices = edges.length;
    const minDistances = new Array(numberOfVertices).fill(Infinity);
    const visited = new Set();
    minDistances[0] = 0;
    const getVertexWithMinDistance = () => {
        let currentMinDistance = Infinity;
        let vertex = null;
        for (let vertexIndex = 0; vertexIndex < minDistances.length; vertexIndex++) {
            let distance = minDistances[vertexIndex];
            if (visited.has(vertexIndex))
                continue;
            if (distance < currentMinDistance) {
                vertex = vertexIndex;
                currentMinDistance = distance;
            }
        }
        return [vertex, currentMinDistance];
    };
    while (visited.size < numberOfVertices) {
        let [vertex, currMinDistance] = getVertexWithMinDistance();
        if (currMinDistance === Infinity)
            break;
        visited.add(vertex);
        for (let edge of edges[vertex]) {
            let [destination, distanceToDestination] = edge;
            if (destination in visited)
                continue;
            let newPathDistance = currMinDistance + distanceToDestination;
            let currentDestinationDistance = minDistances[destination];
            if (newPathDistance < currentDestinationDistance) {
                minDistances[destination] = newPathDistance;
            }
            console.log('visited: ', visited);
            console.log('minDistances: ', minDistances);
        }
    }
    return minDistances.map(x => (x === Infinity ? -1 : x));
};
const dijkstrasAlgorithmHeap = (start, edges) => {
    let minDistances = [];
    let initialDistances = [];
    let numberOfVertices = edges.length;
    for (let i = 0; i < numberOfVertices; i++) {
        minDistances[i] = Infinity;
        initialDistances[i] = [i, Infinity];
    }
    minDistances[start] = 0;
    let minDistancesHeap = new MinHeap(initialDistances);
    minDistancesHeap.update(start, 0);
    console.log(minDistancesHeap);
    while (!minDistancesHeap.isEmpty()) {
        const [vertex, currMinDistance] = minDistancesHeap.remove();
        if (currMinDistance === Infinity)
            break;
        for (let edge of edges[vertex]) {
            const [destination, distanceToDestination] = edge;
            const newPathDistance = currMinDistance + distanceToDestination;
            const currentDestinationDistance = minDistances[destination];
            if (newPathDistance < currentDestinationDistance) {
                minDistances[destination] = newPathDistance;
                minDistancesHeap.update(destination, newPathDistance);
            }
        }
    }
    return minDistances.map(x => (x === Infinity ? -1 : x));
};
const dijkstrasAlgorithm = (start, edges) => {
    let minDistances = [];
    let initialDistances = [];
    for (let i = 0; i < edges.length; i++) {
        minDistances[i] = Infinity;
        initialDistances[i] = [i, Infinity];
    }
    minDistances[start] = 0;
    let minHeap = new MinHeap(initialDistances);
    minHeap.update(start, 0);
    while (!minHeap.isEmpty()) {
        let [origin, distanceToOrigin] = minHeap.remove();
        if (distanceToOrigin === Infinity)
            break;
        for (let edge of edges[origin]) {
            let [destination, distanceToDestination] = edge;
            let newDistance = distanceToOrigin + distanceToDestination;
            let currentMinDestinationDistance = minDistances[destination];
            if (newDistance < currentMinDestinationDistance) {
                minDistances[destination] = newDistance;
                minHeap.update(destination, newDistance);
            }
        }
    }
    return minDistances.map(x => (x === Infinity ? -1 : x));
};
exports.default = () => {
    const start = 0;
    const edges = [
        [
            [1, 7]
        ],
        [
            [2, 6],
            [3, 20],
            [4, 3]
        ],
        [
            [3, 14]
        ],
        [
            [4, 2]
        ],
        [],
        []
    ];
    console.log(dijkstrasAlgorithm(start, edges));
};

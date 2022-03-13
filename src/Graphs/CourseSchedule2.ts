/**
 * 210. Course Schedule 2
 */

const canFinish = (numCourses: number, prerequisites: number[][]): number[] => {
  let vertices: number[] = [];
  for (let i = 0; i < numCourses; i++) vertices.push(i);

  const sourceSet = new Set(vertices);
  const inDegrees: any = {};
  const parents: any = {};

  for (let [child, parent] of prerequisites) {
    if (sourceSet.has(child)) sourceSet.delete(child);
    inDegrees[child] = (inDegrees[child] || 0) + 1;

    if (!parents[parent]) parents[parent] = [];
    parents[parent].push(child);
  }

  const queue = Array.from(sourceSet);
  const result: number[] = [];

  while (queue.length) {
    let vertex = queue.shift();
    result.push(vertex);

    let childrenVertices = parents[vertex];
    if (!childrenVertices) continue;

    for (let child of childrenVertices) {
      inDegrees[child]--;
      if (!inDegrees[child]) queue.push(child);
    }
  }

  return result.length === numCourses ? result : [];
}

export default () => {
  const numCourses = 3;
  const prerequisites = [
    [1, 0],
    [1, 2],
    [0, 2]
  ];
  console.log(canFinish(numCourses, prerequisites));
  console.log(canFinish(2, [[1,0]]));
  console.log(canFinish(2, [[1,0],[0,1]]));
  console.log(canFinish(4, [[1,0],[2,0],[3,1],[3,2]]));
};

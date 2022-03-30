/**
 *  1762. Buildings with an Ocean View
 */

 class SparseVector {
  map:any;

  constructor(nums: number[]) {
    this.map = {};

    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (num !== 0) this.map[i] = num;
    }
  }

  dotProduct(vec: SparseVector): number {
    let sum = 0;
    const {S, L} = this.getSmallAndLargeMaps(this.map, vec.getMap());

    for (let index in S) {
      if (index in L) {
        sum += S[index] * L[index];
      }
    }
    return sum;
  }

  getSmallAndLargeMaps = (currMap:any, vecMap:any) => {
    if (Object.keys(currMap).length < Object.keys(vecMap).length) {
      return {S: currMap, L: vecMap};
    } else {
      return {S: vecMap, L: currMap};
    }
  }
  getMap = () => this.map;
}

export default () => {
  var v1 = new SparseVector([1,0,0,2,3])
  var v2 = new SparseVector([0,3,0,4,0])
  var ans = v1.dotProduct(v2)
  console.log(ans)

  var v3 = new SparseVector([0,1,0,0,2,0,0])
  var v4 = new SparseVector([1,0,0,0,3,0,4])
  var ans2 = v3.dotProduct(v4)
  console.log(ans2)
};

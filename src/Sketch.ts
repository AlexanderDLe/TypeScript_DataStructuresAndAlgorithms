/*

  4  1  2     ->    1  3  4  2
  ^                             ^
  4 has no greater number in nums2. result is -1

  ------------------------------------------------

  4  1  2     ->    1  3  4  2
     ^                    ^  
  the greatest number in nums2 after 1 is 3. result is 3.
  ------------------------------------------------

  4  1  2     ->    1  3  4  2
        ^                       ^  
  there is no greater number after 2 in nums2. result is -1

  ********************************************************

  1   3   4   2
  3   4  -1   -1

  stack: [4, 3, 1]
  

  4 1 2   1 3 4 2
  v           ^
  ------------|    
*/
const assessmentA = (date1:string, date2:string): number => {
  // let result = 0;

  

  // return result;
}

const assessmentB = () => {
  
}


export default () => {
  // console.log(assessmentA("2019-06-29", "2019-06-30"));
  // console.log(assessmentA("2020-01-15", "2019-12-31"));
  // console.log(assessmentB());
};

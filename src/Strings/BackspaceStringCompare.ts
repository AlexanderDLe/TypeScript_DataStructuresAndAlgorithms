/**
 *  38. Count and Say
 */

const backspaceStringCompareA = (s:string, t:string): boolean => {
  let p = s.length - 1;
  let q = t.length - 1;
  let sLeftover: string[] = [];
  let tLeftover: string[] = [];  
  let pB = 0;
  let qB = 0;

  while (p >= 0) {
    if (s[p] === '#') pB++
    else {
      if (pB > 0) pB--;
      else sLeftover.unshift(s[p]);
    }
    p--;
  }

  while (q >= 0) {
    if (t[q] === '#') qB++;
    else {
      if (qB > 0) qB--;
      else tLeftover.unshift(t[q]);
    }
    q--;
  }
  console.log(sLeftover.join(''))
  console.log(tLeftover.join(''))
  return sLeftover.join('') === tLeftover.join('');
}

const backspaceStringCompareB = (s:string, t:string): boolean => {
  let p = s.length - 1;
  let q = t.length - 1;
  let countP = 0;
  let countQ = 0;

  while (p >= 0 || q >= 0) {
    while (p >= 0 && (countP || s[p] === '#')) {
      if (s[p] === '#') countP++;
      else countP--;
      p--;
    }
    while (q >= 0 && (countQ || t[q] === '#')) {
      if (t[q] === '#') countQ++;
      else countQ--;
      q--;
    }

    console.log(p, q);
    let sChar = p < 0 ? '-' : s[p];
    let tChar = q < 0 ? '-' : t[q];
    if (sChar !== tChar) return false;
    p--, q--;
  }
  return p <= 0 && q <= 0;
}

const backspaceStringCompare = (s:string, t:string): boolean => {
  let p = s.length - 1;
  let q = t.length - 1;
  let sBKSP = 0;
  let tBKSP = 0;

  while (p >= 0 || q >=0) {
    while (p >= 0 && (sBKSP || s[p] === '#')) {
      if (s[p] === '#') sBKSP++;
      else sBKSP--;
      p--;
    }
    while (q >= 0 && (tBKSP || t[q] === '#')) {
      if (t[q] === '#') tBKSP++;
      else tBKSP--;
      q--;
    }

    let sChar = p >= 0 ? s[p] : '-';
    let tChar = q >= 0 ? t[q] : '-';
    p--;
    q--;

    if (sChar !== tChar) return false;
  }
  return p <= 0 && q <= 0;
}

export default () => {
  let s = "nzp#o#g", t = "b#nzp#o#g"
  console.log(backspaceStringCompare(s, t));
};

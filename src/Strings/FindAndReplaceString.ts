/**
 *  833. Find and Replace in String
 */

const findReplace = (s: string, indices: number[], sources: string[], targets: string[]): string => {
  const matches = (source:string, i:number) => {
    let len = source.length;
    return source === s.substring(i, i + len);
  }
  const buildMap = () => {
    const map: any = {};
    for (let i = 0; i < indices.length; i++) {
      map[indices[i]] = {
        source: sources[i],
        target: targets[i]
      }
    }
    return map;
  }

  const map: any = buildMap();
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (i in map) {
      let {source, target} = map[i];
      if(matches(source, i)) {
        result += target;
        i += source.length - 1;
        continue;
      }
    }
    result += s[i];
  }

  return result;
}

export default () => {
  console.log(findReplace("abcd", [0, 2], ["a", "cd"], ["eee", "ffff"]));
  console.log(findReplace("abcd", [0, 2], ["ab","ec"], ["eee","ffff"]));
};

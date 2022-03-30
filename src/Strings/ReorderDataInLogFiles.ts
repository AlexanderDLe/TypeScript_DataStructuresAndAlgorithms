/**
 *  937. Reorder Data in Log Files
 */

const reorderLogFiles = (logs: string[]): string[] => {
  const getBody = (s:string) => s.slice(s.indexOf(' ') + 1);

  const letLogs: string[] = []
  const digLogs: string[] = []

  for (let log of logs) {
    let item = log.split(' ')[1];

    if (isNaN(Number(item))) letLogs.push(log);
    else digLogs.push(log);
  }  
  
  letLogs.sort((a:any, b:any) => {
    let diff = getBody(a).localeCompare(getBody(b));
    if (diff) return diff;
    return a.localeCompare(b);
  });
  
  return [...letLogs, ...digLogs];
};

export default () => {
  console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]));
  console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]));
};

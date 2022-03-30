"use strict";
/*
  1152. Analyze User Website Visit Pattern
*/
Object.defineProperty(exports, "__esModule", { value: true });
function mostVisitedPattern(username, timestamp, website) {
    const len = username.length;
    const map = {};
    const patterns = {};
    // Group [timestamps, website] by user in map
    for (let i = 0; i < len; i++) {
        if (!map[username[i]])
            map[username[i]] = [];
        map[username[i]].push([timestamp[i], website[i]]);
    }
    // Process patterns for each user
    for (let user in map) {
        if (map[user].length < 3)
            continue;
        const userPattern = new Set();
        let timeAndSite = map[user];
        timeAndSite.sort((a, b) => a[0] - b[0]);
        // Create all ordered sets and increment frequency
        for (let L = 0; L < timeAndSite.length - 2; L++) {
            for (let M = L + 1; M < timeAndSite.length - 1; M++) {
                for (let R = M + 1; R < timeAndSite.length; R++) {
                    let encode = `${timeAndSite[L][1]}-${timeAndSite[M][1]}-${timeAndSite[R][1]}`;
                    if (userPattern.has(encode))
                        continue;
                    userPattern.add(encode);
                    if (patterns[encode])
                        patterns[encode].frequency++;
                    else {
                        patterns[encode] = {
                            frequency: 1,
                            pattern: [timeAndSite[L][1], timeAndSite[M][1], timeAndSite[R][1]]
                        };
                    }
                }
            }
        }
    }
    const sorted = Object.keys(patterns).sort();
    // Select most common pattern
    let maxFreq = -Infinity;
    let result;
    for (let key of sorted) {
        if (patterns[key].frequency > maxFreq) {
            result = patterns[key].pattern;
            maxFreq = patterns[key].frequency;
        }
    }
    return result;
}
;
exports.default = () => {
    console.log(mostVisitedPattern(["joe", "joe", "joe", "james", "james", "james", "james", "mary", "mary", "mary"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ["home", "about", "career", "home", "cart", "maps", "home", "home", "about", "career"]));
    console.log(mostVisitedPattern(["ua", "ua", "ua", "ub", "ub", "ub"], [1, 2, 3, 4, 5, 6], ["a", "b", "a", "a", "b", "c"]));
    console.log(mostVisitedPattern(["ua", "ua", "ua", "ub", "ub", "ub"], [1, 2, 3, 4, 5, 6], ["a", "b", "c", "a", "b", "a"]));
};

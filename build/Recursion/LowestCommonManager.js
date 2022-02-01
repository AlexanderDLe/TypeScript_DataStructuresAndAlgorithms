"use strict";
/**
 *
 *               A
 *            /  |  \
 *          B    C    D
 *        / |        | \  \
 *      E   F        G  H  I
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
class OrgChart {
    constructor(name) {
        this.name = name;
        this.directReports = [];
    }
}
const lowestCommonManagerQuadratic = (topManager, reportOne, reportTwo) => {
    const DFS = (n) => {
        if (!n)
            return null;
        if (n === reportOne || n === reportTwo)
            return n;
        let reports = n.directReports;
        for (let i = 0; i < reports.length; i++) {
            let found = search(reports[i]);
            if (found === 1)
                return n;
            if (found === 2) {
                return DFS(reports[i]);
            }
        }
    };
    const search = (n) => {
        if (!n)
            return 0;
        let found = 0;
        if (n === reportOne || n === reportTwo)
            found++;
        for (let report of n.directReports) {
            if (search(report))
                found++;
        }
        return found;
    };
    return DFS(topManager);
};
const lowestCommonManagerLinear = (topManager, reportOne, reportTwo) => {
    let result;
    let found = false;
    const DFS = (n) => {
        let sum = 0;
        if (!n || found)
            return 0;
        if (n === reportOne || n === reportTwo)
            sum++;
        for (let report of n.directReports) {
            sum += DFS(report);
        }
        if (sum === 2 && !found) {
            result = n;
            found = true;
        }
        return sum;
    };
    DFS(topManager);
    return result;
};
exports.default = () => {
    const A = new OrgChart('A');
    const B = new OrgChart('B');
    const C = new OrgChart('C');
    const D = new OrgChart('D');
    const E = new OrgChart('E');
    const F = new OrgChart('F');
    const G = new OrgChart('G');
    const H = new OrgChart('H');
    const I = new OrgChart('I');
    A.directReports = [B, C];
    B.directReports = [D, E];
    C.directReports = [F, G];
    D.directReports = [H, I];
    console.log(lowestCommonManagerLinear(A, E, I));
};

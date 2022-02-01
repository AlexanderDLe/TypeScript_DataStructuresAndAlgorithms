"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tournamentWinner = (competitions, results) => {
    let winner = '';
    let maxPoints = 0;
    let map = {};
    for (let i = 0; i < competitions.length; i++) {
        let [homeTeam, awayTeam] = competitions[i];
        let winningTeam = results[i] === 1 ? homeTeam : awayTeam;
        map[winningTeam] = (map[winningTeam] || 0) + 1;
        if (map[winningTeam] > maxPoints) {
            winner = winningTeam;
            maxPoints = map[winningTeam];
        }
    }
    return winner;
};
exports.default = () => {
    let competitions = [
        ['HTML', 'C#'],
        ['C#', 'Python'],
        ['Python', 'HTML']
    ];
    let results = [0, 0, 1];
    console.log(tournamentWinner(competitions, results));
};

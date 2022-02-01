/**
 * Algo Expert
 * 
 * Competitions = [
 *   Home       Away
 *  ['HTML',    'C#'],
 *  ['C#',      'Python'],
 *  ['Python',  'HTML']
 * ]
 * 
 * Results, [0, 0, 1]
 * 1 = Home team wins
 * 0 = Away team wins
 * 
 * Print out the winner.
 */
import { PrintArray, PrintObject } from '../utils/Utilities';

const tournamentWinner = (competitions:string[][], results:number[]): string => {
    let winner = '';
    let maxPoints = 0;
    let map: any = {};

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
}

export default () => {
    
    let competitions = [
        ['HTML',    'C#'],
        ['C#',      'Python'],
        ['Python',  'HTML']
    ];
    let results  = [0, 0, 1];
    console.log(tournamentWinner(competitions, results));
};

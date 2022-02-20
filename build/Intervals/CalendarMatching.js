"use strict";
/**
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("../utils/Utilities");
const calendarMatching = (calendar1, bounds1, calendar2, bounds2, meetingDuration) => {
    const toMins = (time) => {
        let [hour, minutes] = time.split(':');
        return (Number(hour) * 60) + Number(minutes);
    };
    const getTimeDiff = (timeA, timeB) => {
        return Math.abs(toMins(timeB) - toMins(timeA));
    };
    const mergeBounds = () => {
        let start = toMins(bounds1[0]) >= toMins(bounds2[0]) ? bounds1[0] : bounds2[0];
        let end = toMins(bounds1[1]) <= toMins(bounds2[1]) ? bounds1[1] : bounds2[1];
        return [start, end];
    };
    const mergeCalendars = () => {
        let mergedCalendars = [...calendar1, ...calendar2];
        let sorted = mergedCalendars.sort((a, b) => {
            return toMins(a[0]) - toMins(b[0]);
        });
        if (!sorted.length)
            return [];
        let prev = sorted[0];
        let merged = [];
        for (let i = 1; i < sorted.length; i++) {
            let curr = sorted[i];
            let currStart = toMins(curr[0]);
            let prevEnd = toMins(prev[1]);
            if (currStart <= prevEnd) {
                let currEnd = toMins(curr[1]);
                prev[1] = prevEnd > currEnd ? prev[1] : curr[1];
            }
            else {
                merged.push(prev);
                prev = curr;
            }
        }
        merged.push(prev);
        return merged;
    };
    const trimCalenderByBounds = (bounds, schedule) => {
        let startBound = toMins(bounds[0]);
        let endBound = toMins(bounds[1]);
        while (schedule.length) {
            if (startBound >= toMins(schedule[0][1])) {
                schedule.shift();
                continue;
            }
            if (endBound <= toMins(schedule[schedule.length - 1][0])) {
                schedule.pop();
                continue;
            }
            let scheduledStart = toMins(schedule[0][0]);
            let scheduledEnd = toMins(schedule[schedule.length - 1][1]);
            if (startBound > scheduledStart)
                schedule[0][0] = bounds[0];
            if (endBound < scheduledEnd)
                schedule[schedule.length - 1][1] = bounds[1];
            break;
        }
    };
    const findAvailability = (bounds, schedule) => {
        const result = [];
        // Push the end bound for final diff comparison
        schedule.push([bounds[1]]);
        let prevEndTime = bounds[0];
        for (let i = 0; i < schedule.length; i++) {
            let interval = schedule[i];
            let timeDiff = getTimeDiff(prevEndTime, interval[0]);
            if (timeDiff >= meetingDuration) {
                result.push([prevEndTime, interval[0]]);
            }
            prevEndTime = interval[1];
        }
        return result;
    };
    let mergedBounds = mergeBounds();
    let mergedCalendar = mergeCalendars();
    trimCalenderByBounds(mergedBounds, mergedCalendar);
    if (!mergedCalendar.length)
        return [mergedBounds];
    return findAvailability(mergedBounds, mergedCalendar);
};
exports.default = () => {
    const calendar1 = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']];
    const calendar2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']];
    const bounds1 = ['9:00', '20:00'];
    const bounds2 = ['10:00', '18:30'];
    const meetingDuration = 30;
    // let calendar1 = [];
    // let calendar2 = [];
    (0, Utilities_1.PrintMatrix)(calendarMatching(calendar1, bounds1, calendar2, bounds2, meetingDuration));
};

import { LogColors } from "../constants.js";
import { getTimestamp } from "./getTimeStamp.js";
import chalk from 'chalk';

export default function formatLog(level, message) {
    const timestamp = getTimestamp();

    let coloredLevel = '';
    if (LogColors[level]) {
        coloredLevel = LogColors[level](` [${level.toUpperCase().slice(0, 1)}] `);
    } else {
        coloredLevel = chalk.gray(` [${level}] `);
    }
    return `${timestamp} ${coloredLevel} ${message}`;
}
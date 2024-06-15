import chalk from 'chalk';
import callsite from 'callsite';
import path from 'path';

const LogModes = {
    INFO: "INFO",
    WORN: "WORN",
    ERROR: "ERROR"
};

// Define log modes with colors
const LogColors = {
    INFO: chalk.white,
    WORN: chalk.yellow,
    ERROR: chalk.red
};

export default class Log {
    // Private method to get the current timestamp
    #_getTimestamp() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const milliseconds = String(now.getMilliseconds()).padStart(3, '0').slice(0, 2); // Take first two digits for milliseconds

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    // Private method to format the log message
    #_formatLog(level, message) {
        const timestamp = this.#_getTimestamp();
        // const dirName = this.#_getDirName()


        let coloredLevel = ''
        if (LogColors[level]) {
            coloredLevel = LogColors[level](` [${level.toUpperCase().slice(0, 1)}] `);
        } else {
            coloredLevel = chalk.gray(` [${level}] `)
        }


        return ` ${timestamp} ${coloredLevel} ${message}`;
    }

    #_getDirName() {
        var stack = callsite(),
            requester = stack[1].getFileName();

        console.log(requester);
    }

    // Public methods for different log levels
    log(level, message) {
        if (!message) {
            throw new Error(`Message must be provided: ${level}`);
        }

        const formattedMessage = this.#_formatLog(level, message);
        // Log to console with color
        console.log(formattedMessage);
    }

    info(message) {
        this.log(LogModes.INFO, message);
    }

    warn(message) {
        this.log(LogModes.WORN, message);
    }

    error(message) {
        this.log(LogModes.ERROR, message);
    }
}

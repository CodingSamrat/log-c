import chalk from 'chalk';


export const LogModes = {
    INFO: "INFO",
    WARN: "WARN",
    ERROR: "ERROR"
};

// Define log modes with colors
export const LogColors = {
    INFO: chalk.white,
    WARN: chalk.yellow,
    ERROR: chalk.red
};
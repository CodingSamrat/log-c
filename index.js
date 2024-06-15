
import formatLog from './libs/formateLog.js';
import { LogModes } from './constants.js';
// import getCallerInfo from './libs/getCallerInfo.js';




export default class Log {
    constructor(option = {}) {
        this.option = option
    }
    #log(level, message) {
        if (!message) {
            throw new Error(`Message must be provided: ${level}`);
        }

        const formattedMessage = formatLog(level, message);
        // Disable Log
        if (this.option?.disabled === true) {
            console.log(formattedMessage);
        }
    }


    info(message) {

        this.#log(LogModes.INFO, message);
    }

    warn(message) {
        this.#log(LogModes.WARN, message);
    }

    error(message) {
        this.#log(LogModes.ERROR, message);
    }
}

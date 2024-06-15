import Callsite from 'callsite';
import path from 'path';


export default function getCallerInfo() {
    const stack = Callsite();
    // Stack[0] is the current function, Stack[1] is the caller function
    const caller = stack[1]; // Adjust index as needed based on your call stack

    if (caller) {
        const functionName = caller.getFunctionName() || '<anonymous>';
        const fileName = path.basename(caller.getFileName()).split('.').slice(0, -1);
        const lineNumber = caller.getLineNumber();

        return {
            functionName,
            fileName,
            lineNumber
        };
    } else {
        return null;
    }
}

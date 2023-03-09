function log(message) {
    const timestamp = Date.now().toString( );

    const prepareStackTraceBackup = Error.prepareStackTrace;
    Error.prepareStackTrace = (error, stack) => stack;
    const stack = new Error().stack;
    Error.prepareStackTrace = prepareStackTraceBackup;
    const callSite = stack[1];

    const filename = callSite.getFileName();
    const functionName = callSite.getFunctionName() || '<anonymous>';
    const lineNumber = callSite.getLineNumber();
    console.log(`[${timestamp}][${filename}:${lineNumber}][${functionName}] ${message}`);
}
   
log("this is the story");
module.exports = { log };


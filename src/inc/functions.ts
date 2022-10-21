import * as path from "path";

export function _getCallerFile() {
	var originalFunc = Error.prepareStackTrace;

	var callerfile;
	try {
			var err:any = new Error();
			var currentfile;

			Error.prepareStackTrace = function (err, stack) { return stack; };

			currentfile = err.stack.shift().getFileName();

			while (err.stack.length) {
					callerfile = err.stack.shift().getFileName();

					if(currentfile !== callerfile) break;
			}
	} catch (e) {}

	Error.prepareStackTrace = originalFunc; 

	return callerfile;
}

export function _getViewFolder()
{
	let fName = path.basename(_getCallerFile());
	const viewFolder = fName.split('.').shift();
	return viewFolder
}
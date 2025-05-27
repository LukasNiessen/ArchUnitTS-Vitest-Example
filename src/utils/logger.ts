export class Logger {
	private static instance: Logger;

	private constructor() {}

	static getInstance(): Logger {
		if (!Logger.instance) {
			Logger.instance = new Logger();
		}
		return Logger.instance;
	}

	log(message: string): void {
		console.log(`[LOG]: ${message}`);
	}

	error(message: string): void {
		console.error(`[ERROR]: ${message}`);
	}
}

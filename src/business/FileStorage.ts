export class FileStorage {
	private filePath: string;

	constructor(filePath: string = '/tmp/data.txt') {
		this.filePath = filePath;
	}

	saveToFile(content: string): void {
		console.log(`Saving data to ${this.filePath}: ${content}`);
	}

	getFilePath(): string {
		return this.filePath;
	}

	setFilePath(newPath: string): void {
		this.filePath = newPath;
	}
}

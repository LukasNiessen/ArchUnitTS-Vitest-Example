import { openDB } from '../database/database-helper';

export class DatabaseService {
	private static instance: DatabaseService;

	private constructor() {}

	static getInstance(): DatabaseService {
		if (!DatabaseService.instance) {
			DatabaseService.instance = new DatabaseService();
		}
		return DatabaseService.instance;
	}

	openDatabase(): void {
		openDB();
	}
}

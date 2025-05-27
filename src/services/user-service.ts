import { openDB } from '../database/database-helper';

export class UserService {
	private static instance: UserService;

	private constructor() {}

	static getInstance(): UserService {
		if (!UserService.instance) {
			UserService.instance = new UserService();
		}
		return UserService.instance;
	}

	async getUserData(userId: string): Promise<void> {
		openDB();
		// Simulated user data fetch
	}
}

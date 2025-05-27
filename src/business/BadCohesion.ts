// This file now acts as a facade to the more cohesive UserData and FileStorage classes
import { UserData } from './UserData';
import { FileStorage } from './FileStorage';

export class ImprovedCohesion {
	private userDataManager: UserData;
	private fileStorageManager: FileStorage;

	constructor() {
		this.userDataManager = new UserData();
		this.fileStorageManager = new FileStorage();
	}

	authenticate(): void {
		this.userDataManager.authenticate();
	}

	saveToFile(): void {
		// Using the user data when saving to file
		this.fileStorageManager.saveToFile(
			this.userDataManager.isUserAuthenticated()
				? 'Authenticated data'
				: 'Anonymous data'
		);
	}

	printUserData(): void {
		this.userDataManager.printUserData();
	}
}

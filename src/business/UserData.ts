export class UserData {
	private userData: string;
	private isAuthenticated: boolean;

	constructor(userData: string = 'User data') {
		this.userData = userData;
		this.isAuthenticated = false;
	}

	authenticate(): void {
		this.isAuthenticated = true;
	}

	printUserData(): void {
		console.log(this.userData);
	}

	isUserAuthenticated(): boolean {
		return this.isAuthenticated;
	}

	updateUserData(newData: string): void {
		this.userData = newData;
	}
}

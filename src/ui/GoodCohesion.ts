class UserSession {
	private username: string;
	private isAuthenticated: boolean;

	constructor(username: string) {
		this.username = username;
		this.isAuthenticated = false;
	}

	login(password: string): void {
		// Dummy auth logic
		if (password === 'secret') {
			this.isAuthenticated = true;
			console.log(`${this.username} logged in.`);
		}
	}

	logout(): void {
		this.isAuthenticated = false;
		console.log(`${this.username} logged out.`);
	}

	getStatus(): string {
		return `${this.username} is ${this.isAuthenticated ? 'online' : 'offline'}`;
	}
}

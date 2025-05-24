// imports and applies the jest extensions
import 'archunit/dist/jest';

// imports the files entrypoint
import { filesOfProject } from 'archunit';

describe('architecture', () => {
	// architecture tests can take a while to finish
	jest.setTimeout(60000);

	// we use async await in combination with jest since this project uses asynchronous calls
	it('business logic should not depend on the ui', async () => {
		const rule = filesOfProject()
			.inFolder('business')
			.shouldNot()
			.dependOnFiles()
			.inFolder('ui');

		await expect(rule).toPassAsync();
	});

	it('business logic should be cycle free', async () => {
		const rule = filesOfProject().inFolder('business').should().beFreeOfCycles();

		await expect(rule).toPassAsync();
	});

	// we use async await in combination with jest since this project uses asynchronous calls
	it('ui logic should not depend on database logic', async () => {
		const rule = filesOfProject()
			.inFolder('ui')
			.shouldNot()
			.dependOnFiles()
			.inFolder('database');

		await expect(rule).toPassAsync();
	});
});

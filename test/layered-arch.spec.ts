import { projectFiles } from 'archunit';
import { describe, it, expect } from 'vitest';

describe('architecture', () => {
	// architecture tests can take a while to finish
	// Vitest default timeout is 5000ms. If needed, configure in vitest.config.ts or use test.setTimeout

	// we use async await in combination with jest since this project uses asynchronous calls
	it('business logic should not depend on the ui', async () => {
		const rule = projectFiles()
			.inFolder('business')
			.shouldNot()
			.dependOnFiles()
			.inFolder('ui');

		await expect(rule).toPassAsync();
	});

	it('business logic should be cycle free', async () => {
		const rule = projectFiles().inFolder('business').should().haveNoCycles();

		await expect(rule).toPassAsync();
	});

	// we use async await in combination with jest since this project uses asynchronous calls
	it('ui logic should not depend on database logic', async () => {
		const rule = projectFiles()
			.inFolder('ui')
			.shouldNot()
			.dependOnFiles()
			.inFolder('database');

		await expect(rule).toPassAsync();
	});
});

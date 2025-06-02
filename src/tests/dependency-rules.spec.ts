import { projectFiles } from 'archunit';
import { describe, it, expect } from 'vitest';

describe('Dependency Rules', () => {
	it('services should not directly depend on UI layer', async () => {
		const rule = projectFiles()
			.inFolder('services')
			.shouldNot()
			.dependOnFiles()
			.inFolder('ui');

		await expect(rule).toPassAsync();
	});

	it('utils should not depend on business layer', async () => {
		const rule = projectFiles()
			.inFolder('utils')
			.shouldNot()
			.dependOnFiles()
			.inFolder('business');

		await expect(rule).toPassAsync();
	});

	it('utils should not depend on services layer', async () => {
		const rule = projectFiles()
			.inFolder('utils')
			.shouldNot()
			.dependOnFiles()
			.inFolder('services');

		await expect(rule).toPassAsync();
	});

	it('utils should not depend on database layer', async () => {
		const rule = projectFiles()
			.inFolder('utils')
			.shouldNot()
			.dependOnFiles()
			.inFolder('database');

		await expect(rule).toPassAsync();
	});

	it('utils should not depend on UI layer', async () => {
		const rule = projectFiles()
			.inFolder('utils')
			.shouldNot()
			.dependOnFiles()
			.inFolder('ui');

		await expect(rule).toPassAsync();
	});

	it('ui should not depend on database layer', async () => {
		const rule = projectFiles()
			.inFolder('ui')
			.shouldNot()
			.dependOnFiles()
			.inFolder('database');

		await expect(rule).toPassAsync();
	});
});

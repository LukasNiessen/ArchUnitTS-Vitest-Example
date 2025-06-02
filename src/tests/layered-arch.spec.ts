import { projectFiles } from 'archunit';
import { describe, it, expect } from 'vitest';

describe('architecture', () => {
	it.only('business logic should not depend on the ui', async () => {
		const rule = projectFiles()
			.inFolder('src/business')
			.shouldNot()
			.dependOnFiles()
			.inFolder('src/services');

		await expect(rule).toPassAsync();
	});

	it('business logic should be cycle free', async () => {
		const rule = projectFiles().inFolder('business').should().haveNoCycles();
		await expect(rule).toPassAsync();
	});

	it('ui logic should not depend on database logic', async () => {
		const rule = projectFiles()
			.inFolder('ui')
			.shouldNot()
			.dependOnFiles()
			.inFolder('database');

		await expect(rule).toPassAsync();
	});

	it('ui logic should not depend on database logic', async () => {
		const rule = projectFiles()
			.inFolder('ui')
			.shouldNot()
			.dependOnFiles()
			.inFolder('database');

		await expect(rule).toPassAsync();
	});

	it('ui should match pattern', async () => {
		const rule = projectFiles().inFolder('ui').should().matchPattern('*.ts');
		await expect(rule).toPassAsync();
	});
});

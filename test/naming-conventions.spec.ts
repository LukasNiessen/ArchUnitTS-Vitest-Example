import { projectFiles } from 'archunit';
import { describe, it, expect } from 'vitest';

describe('Naming Conventions', () => {
	it('service files should end with -service.ts', async () => {
		const rule = projectFiles()
			.inFolder('services')
			.should()
			.matchPattern('.*-service.ts$');

		await expect(rule).toPassAsync();
	});

	it('test files should end with .spec.ts', async () => {
		const rule = projectFiles().inFolder('test').should().matchPattern('.*.spec.ts$');
		await expect(rule).toPassAsync();
	});
});

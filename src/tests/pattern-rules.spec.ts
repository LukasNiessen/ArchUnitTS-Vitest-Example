import { projectFiles } from 'archunit';
import { describe, it, expect } from 'vitest';

describe('Pattern Rules', () => {
	it('services should have specific patterns', async () => {
		// Check that service files exist
		const rule = projectFiles()
			.inFolder('services')
			.should()
			.matchFilename('*-service.ts');

		await expect(rule).toPassAsync();
	});

	it('business logic should be cycle free', async () => {
		const rule = projectFiles().inFolder('business').should().haveNoCycles();

		await expect(rule).toPassAsync();
	});
});

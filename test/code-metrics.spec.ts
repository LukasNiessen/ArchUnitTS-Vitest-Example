import { metrics } from 'archunit';
import { describe, it, expect } from 'vitest';

describe('architecture', () => {
	// architecture tests can take a while to finish
	// Vitest default timeout is 5000ms. If needed, configure in vitest.config.ts or use test.setTimeout

	it('lcom should be below 0.5 in business', async () => {
		const rule = metrics()
			.inFolder('business')
			.lcom()
			.lcom96b()
			.shouldBeBelowOrEqual(0.5);
		await expect(rule).toPassAsync();
	});

	it('lcom should be below 0.5 ui', async () => {
		const rule = metrics().inFolder('ui').lcom().lcom96b().shouldBeBelow(0.5);
		await expect(rule).toPassAsync();
	});

	it('project summary', async () => {
		//const projectSummaryDistances = await metrics().distance().getProjectSummary();
		//const projectSummaryLCOM = await metrics().lcom()
	});

	it('should not have too large files summary', async () => {
		metrics().count().linesOfCode().shouldBeBelow(1000);
	});
});

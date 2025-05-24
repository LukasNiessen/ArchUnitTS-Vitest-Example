module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/test/**/*-test.ts', '**/test/**/*.test.ts'],
	moduleFileExtensions: ['ts', 'js'],
	roots: ['<rootDir>/src', '<rootDir>/test'],
};

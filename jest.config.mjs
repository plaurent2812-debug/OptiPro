import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // .claude/worktrees contient des copies de travail du repo : sans cette
  // exclusion, Jest y découvre les mêmes tests en double avec leurs propres
  // node_modules et remonte des échecs qui ne concernent pas le code du projet.
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/.claude/',
  ],
};

export default createJestConfig(config);

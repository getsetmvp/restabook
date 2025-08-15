module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  restoreMocks: true,
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.js', '!src/config/**', '!src/app.js', '!src/index.js'],
  coveragePathIgnorePatterns: ['node_modules', 'src/config', 'src/app.js', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  testMatch: ['**/tests/**/*.test.js'],
};

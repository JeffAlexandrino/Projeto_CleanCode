export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  testMatch: [
    '**/__tests__/**/*.?(js|jsx)',
    '**/?(*.)+(spec|test).?(js|jsx)'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json'],
};
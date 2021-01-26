module.exports = {
  // preset: 'jest-preset-preact',
  // setupFiles: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '^.*[.](jpg|JPG|gif|GIF|png|PNG|scss|css)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  // modulePathIgnorePatterns: ['cypress'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./setupTests.js'],
};

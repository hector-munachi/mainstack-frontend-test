export default {
  // Jest configuration options...
  // For example:
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
  ],
  "transform": {
    "^.+\\.(js|jsx)$": "babel-jest"
 },
 "moduleNameMapper": {
  "^.+\\.svg$": "jest-svg-transformer",
  "^.+\\.(css|less|scss)$": "identity-obj-proxy"
}
};

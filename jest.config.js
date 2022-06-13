module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/tags.ts",
    "<rootDir>/src/main.tsx",
    "<rootDir>/src/App.tsx",
    "<rootDir>/src/tests/*",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  testEnvironment: "jsdom",
  collectCoverageFrom: ["<rootDir>/src/**/*.(ts|tsx)"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "ts-jest",
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/tests/empty-module.js",
    "\\.png$": "<rootDir>/src/tests/empty-module.js",
  },
};

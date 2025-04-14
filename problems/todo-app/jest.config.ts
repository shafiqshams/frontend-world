module.exports = {
   preset: 'ts-jest/presets/js-with-ts',
   testEnvironment: 'jest-environment-jsdom',
   transform: {
      '^.+\\.tsx?$': ['ts-jest', {
         tsconfig: 'tsconfig.json'
      }]
   },
   moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy'
   },
   testMatch: ['**/__tests__/**/*.test.(ts|tsx)']
};

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['vue', 'js', 'ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  }
} 
module.exports = {
  projects: ['<rootDir>/apps/client-starter', '<rootDir>/apps/api-starter'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "\\.ts$": ['ts-jest']
  }
};

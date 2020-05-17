const base = require('./jest.config');
module.exports = Object.assign({}, base, {
  collectCoverage: true,
  reporters: ["default", "jest-junit", [ 'jest-junit', {
    outputDirectory: 'test_reports',
    outputName: 'jest-junit.xml',
  } ]],
});

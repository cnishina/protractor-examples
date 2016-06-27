exports.config = {
  directConnect: 'true',
  allScriptsTimeout: 15000,
  capabilities: {
    browserName: 'chrome'
  },
  framework: 'jasmine',
  specs: ['./spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    onComplete: null,
    showColors: true,
    includeStackTrace: true,
  }
}

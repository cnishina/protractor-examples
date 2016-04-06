exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome'
  },
  framework: 'jasmine',
  specs: [
    'spec.js'
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
}

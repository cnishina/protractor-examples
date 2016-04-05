exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'internet explorer',
    elementScrollBehavior: 1,
    nativeEvents: false
  },
  framework: 'jasmine',
  baseUrl: 'http://angularjs.org',
  specs: [
    'capabilities_spec.js'
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
}

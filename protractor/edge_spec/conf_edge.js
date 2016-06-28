exports.config = {
  seleniumAddress: 'http://localhost:17556',
  capabilities: {
    browserName: 'MicrosoftEdge',
    elementScrollBehavior: 1,
    nativeEvents: false
  },
  framework: 'jasmine',
  baseUrl: 'http://angularjs.org',
  specs: [
    'spec.js'
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
}

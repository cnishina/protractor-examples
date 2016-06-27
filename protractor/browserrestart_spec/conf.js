exports.config = {
  directConnect: 'true',
  allScriptsTimeout: 15000,
  capabilities: {
    browserName: 'chrome'
  },
  // for spec.js
  restartBrowserBetweenTests: true,
  // for restart_spec.js:
  // restartBrowserBetweenTests: false
  framework: 'jasmine2',
  specs: ['./spec.js'],
  // for restart_spec.js:
  // specs: ['./restart_spec.js'],
  onPrepare: function () {
    console.log('onPrepare');
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    onComplete: null,
    showColors: true,
    includeStackTrace: true,
  }
}

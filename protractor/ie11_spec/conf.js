exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
      browserName: 'internet explorer'
  },
  framework: 'jasmine',
  baseUrl: 'http://angularjs.org',
  specs: [
    'multi_window_spec.js'
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onPrepare: function() {
    browser.driver.manage().window().maximize();
  }
}

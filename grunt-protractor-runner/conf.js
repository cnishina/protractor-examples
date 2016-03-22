exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'jasmine',

  specs: [
    'test.js'
  ],

  capabilities: { browserName: 'firefox' },

  baseUrl: 'http://localhost:8082/',
};

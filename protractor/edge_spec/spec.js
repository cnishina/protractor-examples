describe('specs loaded to selenium', function() {
  it('should have the right capabilities', function() {
    browser.get(browser.baseUrl);
    browser.getCapabilities().then(function(capabilities) {
      console.log(capabilities);
      console.log('browserName:', capabilities.get('browserName'));
    });
  });
});

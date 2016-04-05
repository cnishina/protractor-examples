describe('angularjs homepage', function() {
  it('open two pages', function() {
    console.log(browser.baseUrl);
    browser.get(browser.baseUrl);
    browser.getCapabilities().then(function(capabilities) {
      // http://stackoverflow.com/questions/23872955/get-the-current-browser-name-in-protractor-test
      console.log(capabilities);
    });
    element(by.model('yourName')).sendKeys('Bar');
    var greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Bar!');
    browser2 = browser.forkNewDriverInstance();
    console.log('two browsers?');

    browser2.get(browser.baseUrl);
    browser2.element(by.model('yourName')).sendKeys('Foo');
    var greeting = browser2.element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Foo!');

    browser2.getCapabilities().then(function(capabilities) {;
      console.log(capabilities);
    });
    browser2.driver.sleep(10000);
  });
});

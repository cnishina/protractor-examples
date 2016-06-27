describe('testing', function () {
  var firstTest = true;
  beforeEach(function () {
    console.log('beforeEach: browser.get');
    if (firstTest) {
      firstTest = !firstTest;
    } else {
      browser = browser.forkNewDriverInstance();
    }
    browser.get('http://juliemr.github.io/protractor-demo/');
  });
  afterEach(function() {
    console.log('afterEach: close browser');
    browser.manage().logs().get('browser').then(function(browserLog) {
        console.log(browserLog);
    });
    browser.close();
  });
  it('should have a title', function () {
    console.log('it: should have a title');
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
  it('should have a title2', function () {
    console.log('it: should have a title');
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});

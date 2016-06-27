describe('testing', function () {
  beforeEach(function () {
    console.log('beforeEach: browser.get');
    browser.get('http://juliemr.github.io/protractor-demo/');
  });
  afterEach(function() {
    console.log('afterEach: get logs');
    browser.manage().logs().get('browser').then(function(browserLog) {
        console.log(browserLog);
    });
  });
  it('should have a title', function () {
    console.log('it: should have a title');
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
  it('should have a title2', function () {
    console.log('it: should have a title2');
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});

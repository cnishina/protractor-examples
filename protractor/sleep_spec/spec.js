describe('browser', function() {
  it('should sleep', function() {
    browser.get('http://angularjs.org');
    
    // does not work
    // browser.sleep(10000);
    // console.log('waited 10 seconds?');

    browser.sleep(10000).then(function() {
      console.log('waited 10 seconds');
    });
  });
});

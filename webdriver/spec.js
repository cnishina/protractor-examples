describe('selenium equivalent', function() {
  it('should find by className', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8000/web.html');
    var li = browser.findElement(by.className('cat'));
    li.getText().then(function(value) {
      console.log('by.className', value);
    });
    expect(li.getText()).toBe('Cat');
  });
  it('should find by css', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8000/web.html');
    var li = browser.findElement(by.css('.pet .dog'));
    li.getText().then(function(value) {
      console.log('by.css', value);
    });
  });
  it('should find by id', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8000/web.html');
    var li = browser.findElement(by.id('dog_id'));
    li.getText().then(function(value) {
      console.log('by.id', value);
    });
  });
  it('should find by name', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8000/web.html');
    var li = browser.findElement(by.name('dog_name'));
    li.getText().then(function(value) {
      console.log('by.name', value);
    });
  });
  it('should find by partial link text', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8000/web.html');
    var li = browser.findElement(by.partialLinkText('Doge'));
    li.getText().then(function(value) {
      console.log('by.partialLinkText', value);
    });
    li.click();
  });
  it('should find by xpath', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8000/web.html');
    var li = browser.findElement(by.xpath('//ul/li/a'));
    li.getText().then(function(value) {
      console.log('by.xpath', value);
    });
    expect(li.getText()).toBe('Doge meme');
  });
  it('should be clicked', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8000/web.html');
    browser.ignoreSynchronization = true;
    element(by.partialLinkText('Doge')).click();

    expect(browser.getLocationAbsUrl()).toBe('https://en.wikipedia.org/wiki/Doge_(meme)');
  });
  it('should get driver', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8000/web.html');
    var liDog = element(by.css('.dog')).getWebElement();
    var liCat = liDog.getDriver().findElement(by.css('.cat'));
    liCat.getText().then(function(value) {
      console.log(value);
    });
  });
  it('should get the id', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8000/web.html');


    var dog = element(by.css('.dog')).getWebElement();
    expect(dog.getId()).not.toBe(-1);
  });
});

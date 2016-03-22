describe("Testing", function () {

    // it("1", function () {
    //     expect(false).toBeTruthy();
    // });
    //
    // it("2", function (done) {
    //   setTimeout(function () {
    //       expect(false).toBeTruthy();
    //       done();
    //   }, 2000);
    // });
    // var webdriver = require('selenium-webdriver');
    // var fs = require('fs');



    // it("3", function() {
    //   browser.get('/');
    //   browser.takeScreenshot().then(function(data) {
    //     var filename = 'wholeimage.png';
    //     fs.writeFile(filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
    //         if(err) throw err;
    //     });
    //   });
    //   var img = browser.findElement(By.css('.hero'));
    //   img.takeScreenshot();
    // });

  // it("4", function() {
  //   browser.ignoreSynchronization = true;
  //   browser.get('index.html');
  //   element.all(by.css('.items li')).then(function(items) {
  //     expect(items.length).toBe(3);
  //     expect(items[0].getText()).toBe('');
  //     expect(items[1].getText()).toBe('Second');
  //   });
  // });

  // it("should print orig first then print changed", function() {
  //   browser.ignoreSynchronization = true;
  //   browser.get('index.html');
  //   var aTest = 'orig';
  //   element.all(by.css('.items li')).each(function(item) {
  //     aTest = 'changed';
  //     console.log(aTest);
  //   });
  //   console.log(aTest);
  // });
  //
  // it("should might print all changed", function() {
  //   browser.ignoreSynchronization = true;
  //   browser.get('index.html');
  //   var aTest = 'orig';
  //   var i = 0;
  //   element.all(by.css('.items li')).each(function(item) {
  //       aTest = 'changed';
  //       console.log(aTest + i);
  //       i++;
  //   }).then(function() {
  //     console.log(aTest + i);   // changed3
  //   });
  // });

  beforeAll(function() {
    console.log('beforeAll!');
  });

  beforeEach(function() {
    console.log('beforeEach!');
  });

  it('should print to console #1', function() {
    console.log('first test');
  });

  it('should print to console #2', function() {
    console.log('another test');
  });

  it('should print to console #3', function() {
    console.log('a 3rd test');
  });

  describe('a nested beforeall', function() {
    beforeAll(function() {
      console.log('nested beforeAll')
    });

    beforeEach(function() {
      console.log('nested beforeEach');
    });

    it('should print to console #4', function() {
      console.log('a 4th test');
    });

    it('should print to console #5', function() {
      console.log('a 5th test');
    });
  });
});

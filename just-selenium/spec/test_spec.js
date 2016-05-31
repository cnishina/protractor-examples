var webdriver = require('selenium-webdriver');
var by = webdriver.By;

var text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique arcu dignissim, lobortis arcu vel, rhoncus elit. Sed ullamcorper justo dolor, vestibulum euismod dolor dapibus non. Nullam volutpat enim nulla, quis aliquet massa fringilla vel. In hac habitasse platea dictumst. Cras nec dui enim. Ut sit amet maximus augue. Vivamus interdum, leo fringilla sodales lacinia, augue urna elementum lectus, at consequat urna nisl eget est. Aliquam consequat ipsum lectus, eu sodales sapien tristique sit amet. Nam ullamcorper lacinia pulvinar. Vivamus mi est, luctus non suscipit et, sodales luctus libero. Morbi lacus odio, lacinia sed mattis vel, sodales condimentum turpis. Etiam quis ipsum tortor. Nulla commodo posuere tempus. Mauris ultricies neque a enim dignissim lobortis. Mauris varius ullamcorper tristique. Pellentesque eget imperdiet felis. Etiam eget nisi hendrerit orci dapibus dapibus. Vivamus tristique tellus eu lectus scelerisque sodales. Vestibulum pharetra aliquet orci, non laoreet mauris eleifend sit amet. Donec placerat nec ante sed convallis. Pellentesque mollis, ex nec malesuada lacinia, turpis augue fermentum nisi, eu congue lacus erat eu orci. Pellentesque vitae placerat risus. Ut sed metus et eros congue pharetra. Praesent convallis neque a sagittis tristique. Vivamus id tortor id nisi tincidunt rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam dui justo, viverra in interdum quis, facilisis et nisi. Donec id odio commodo, ullamcorper mi ut, tincidunt libero. Mauris ut velit est. Proin mi tellus, iaculis et nulla aliquam, rhoncus finibus tellus. Suspendisse aliquet suscipit mauris, in venenatis magna elementum vel.`;

var browser = new webdriver.Builder()
  .usingServer('http://localhost:4444/wd/hub')
  .withCapabilities({'browserName': 'chrome'})
  .build();
try {
  browser.get('http://angularjs.org').then(function() {
    browser.findElement(by.css('input.ng-valid.ng-empty')).then(function(inputElem) {
      inputElem.sendKeys(text).then(function() {
        browser.findElement(by.css('h1.ng-binding')).then(function(textElem) {
          textElem.getText().then(function(textValue) {
            if (textValue !== 'Hello ' + text + '!') {
              throw new Error('could not find lorem ipsum');
            }

          });
        });
      });
    });
  });
}
finally {
  browser.quit();
}

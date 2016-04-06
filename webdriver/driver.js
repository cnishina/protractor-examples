var webdriver = require('selenium-webdriver');

// Note that this behaves differently depending on the browser - safari
// never shows the select as open, firefox never fires the 'change' event,
// and chrome never closes the select.
var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'chrome'}).
    build();


driver.get('http://localhost:8000/web.html');

// var classname = driver.findElement(webdriver.By.className('dog'));
// classname.getText().then(function(value) {
//   console.log('by.className',value);
// });
//
// var css = driver.findElement(webdriver.By.css('.pet .dog'));
// css.getText().then(function(value) {
//   console.log('by.css',value);
// });
//
// var id = driver.findElement(webdriver.By.id('dog_id'));
// id.getText().then(function(value) {
//   console.log('by.id',value);
// });
//
// var name = driver.findElement(webdriver.By.name('dog_name'));
// name.getText().then(function(value) {
//   console.log('by.name',value);
// });
//
// var xpath = driver.findElement(webdriver.By.xpath('//ul/li/a'));
// xpath.getText().then(function(value) {
//   console.log('by.xpath',value);
// });

// var byjs = driver.find(webdriver.By.js(`function() {
//
// }`));
// byjs.getText().then(function(value) {
//   console.log('by.js', value);
// });

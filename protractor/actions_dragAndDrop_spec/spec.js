describe('', () => {
  beforeAll(() => {
    browser.get('http://marceljuenemann.github.io/angular-drag-and-drop-lists/demo/#/advanced');
  });
  it('', () => {
    var start = element.all(by.repeater('item in items')).get(0);
    var end = element.all(by.repeater('item in items')).get(1);
    start.getText().then((text) => {
      console.log(text);
    });
    end.getText().then((text) => {
      console.log(text);
    });
    start.getWebElement().getLocation().then((location) => {
      console.log(location);
    });
    end.getWebElement().getLocation().then((location) => {
      console.log(location);
    });

    browser.driver.actions()
      .mouseDown(start.getWebElement())
      .mouseMove(end.getWebElement())
      .mouseUp()
      .perform().then(() => {
        console.log('mouse down, move, mouse up!');
        browser.pause();
      });
  });

  afterAll(() => {

  });
});

describe('execution order', function() {
  beforeAll(function() {
    console.log('beforeAll!');
  });

  beforeEach(function() {
    console.log('beforeEach!');
  });

  it('#1: should print to console', function() {
    console.log('test #1');
  });

  it('#2: should print to console', function() {
    console.log('test #2');
  });

  it('#3: should print to console', function() {
    console.log('test #3');
  });

  describe('a nested describes', function() {
    beforeAll(function() {
      console.log('a nested beforeAll');
    });

    beforeEach(function() {
      console.log('a nested beforeEach');
    });

    it('#4: should print to console', function() {
      console.log('test #4');
    });
    
    it('#5: should print to console', function() {
      console.log('test #5');
    });
  });
});

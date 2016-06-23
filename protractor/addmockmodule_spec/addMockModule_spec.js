browser.addMockModule('foo', function() {
  angular.module('foo', []).value('foo', 'bar');
});

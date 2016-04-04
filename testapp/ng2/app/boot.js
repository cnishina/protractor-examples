System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, router_1, router_2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            console.log('what');
            browser_1.bootstrap(router_2.Router, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=boot.js.map
investigation of #3283

editing runner.js at line 215:
```
        browser_.restart = function () {
          console.log('restarting!');
            // Note: because tests are not paused at this point, any async
            // calls here are not guaranteed to complete before the tests resume.
            _this.driverprovider_.quitDriver(browser_.driver);
            // Copy mock modules, but do not navigate to previous URL.
            browser_ = browser_.forkNewDriverInstance(false, true);
            _this.setupGlobals_(browser_);
        };
```

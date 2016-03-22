module.exports = function(grunt) {
  grunt.initConfig({
    protractor: {
      options: {
        configFile: "node_modules/protractor/example/conf.js",
        keepAlive: true,
        noColor: false,
        args: {}
      },
      your_target: {
        options: {
          configFile: 'conf.js',
          args:{}
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-protractor-runner');
};

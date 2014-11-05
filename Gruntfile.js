module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          '': 'src/scss/app.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', []);
};

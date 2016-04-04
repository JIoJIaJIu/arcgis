// copied from https://github.com/Esri/jsapi-resources.git
module.exports = function (grunt) {
  // Build customizations would be left up to developer to implement.
  grunt.loadNpmTasks('grunt-dojo');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.initConfig({
    clean: {
      build: {
        src: ['build'],
        options: {
          force: true
        }
      },
      uncompressed: {
        src: [
          'build/**/*.uncompressed.js'
        ],
        options: {
          force: true
        }
      }
    },
    dojo: {
      dist: {
        options: {
          releaseDir: './build',
        }
      },
      options: {
        profile: 'src/build.profile.js',
        dojo: 'bower_components/dojo/dojo.js',
        load: 'build',
        cwd: './',
        basePath: './'
      }
    }
  });

  grunt.registerTask('build', ['clean:build', 'dojo', 'clean:uncompressed']);

};

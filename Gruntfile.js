module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin:{
      options:{
        removeComments: true,
        collapseWhitespace:true
      },
      files:{
        src:'./index.html',
        dest:'dest/index.html'
      }
    },
    cssmin:{
      'dest/register.css':'register.css'
    },
    uglify:{
      'dest/register.js':'register.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); 
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('lint', ['cssmin','htmlmin','uglify']);
};


/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      full_images: {
        options: {
          engine: 'im',
          sizes: [
            {
              name: '2x',
              width: 1600,
              quality: 30
            },
            {
              name: '1x',
              width: 800,
              quality: 30
            }
          ]
        },

        files: [{
          expand: true,
          src: ['*_full.{gif,jpg}'],
          cwd: 'photos/',
          dest: 'photos_dev/'
        }]
      },
      squares: {
        options: {
          engine: 'im',
          sizes: [
            {
              name: '1x',
              width: 200,
              quality: 30
            },
            {
              name: '2x',
              width: 400,
              quality: 30
            }
          ]
        },

        files: [{
          expand: true,
          src: ['*_square.{gif,jpg}'],
          cwd: 'photos/',
          dest: 'photos_dev/'
        }]
      }
    },

    /* Clear out the source directory if it exists */
    clean: {
      dev: {
        src: ['photos_dev'],
      },
    },

    /* Generate the photos_dev directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['photos_dev']
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};

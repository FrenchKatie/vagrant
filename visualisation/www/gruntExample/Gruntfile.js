module.exports = function(grunt){
    grunt.initConfig({
        cssmin: { //minify css
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',//what folder are we looking for?
                    src: ['*.css', '!*.min.css'], //every file with a .css and then saying DONT include any file with a .min.css (would be minifying the minified version )
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },

        watch: {
            css:{
                files: ['css/style.css'],//what file to watch for
                tasks: ['cssmin']
            }
        },

        uglify: {
            options: {
                mangle: false
            },

            my_target: {
                files: {
                    'js/script.min.js': ['js/script.js']
                }
            }
        }
    });

    // grunt.loadNpmTasks();
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // grunt.registerTask();
    //the first thing written below is what you will type in the terminal and the second thing is what you want to run when you type that
    grunt.registerTask('min', ['cssmin']);
    grunt.registerTask('w', ['watch']);
    grunt.registerTask('u', ['uglify']);







};

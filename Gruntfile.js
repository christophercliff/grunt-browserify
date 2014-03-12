module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.initConfig({
        browserify: {
            experiment: {
                options: {

                },
                src: './lib/index.js',
                dest: './dist/experiment.js'
            }
        },
        uglify: {
            experiment: {
                options: {
                    mangle: false,
                    beautify: true,
                    compress: false
                },
                files: {
                    './dist/experiment.js': './dist/experiment.js'
                }
            }
        }
    })

    grunt.registerTask('experiment', [
        'browserify:experiment',
        'uglify:experiment'
    ])

}

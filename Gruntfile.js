module.exports = function(grunt) {
    grunt.initConfig({
        // running `grunt less` will compile once
        less: {
            development: {
                options: {
                    paths: ["./css"],
                    yuicompress: true,
                    sourceMap: true
                },
                files: {
                    "./css/style.css": "./less/style.less"
                }
            }
        },
        // running `grunt watch` will watch for changes
        watch: {
            files: "./less/**/*.less",
            tasks: ["less"]
        }
    });
    grunt.registerTask('run', ['less','watch']);
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
/* global module */

module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({

        jshint: {
            options: grunt.file.readJSON(".jshintrc"),
            files: [
                "Gruntfile.js",
                "RomanNumerals/Scripts/*.js"
            ]
        },

        jasmine: {
            all_targets: {
                src: [
                    "RomanNumerals/Scripts/RomanNumerals.js"
                ],
                options: {
                    specs: [
                        "RomanNumerals/Scripts/RomanNumeralsSpec.js"
                    ]
                }
            }
        },

        watch: {
            files: ["<%= jshint.files %>"],
            tasks: ["jshint", "jasmine"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jasmine");

    grunt.registerTask("default", ["jshint", "jasmine"]);
};

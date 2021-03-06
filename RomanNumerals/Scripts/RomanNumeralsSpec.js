﻿/// <reference path="RomanNumerals.js" />
/// <reference path="jasmine-1.3.1/jasmine.js" />
/// <reference path="it_multiple.js" />

(function () {

    "use strict";

    describe("Roman Numerals Tests", function () {

        it_multiple(
            "when given this input it returns this output",
            function (input, output) {
                expect(romanNumerals(input)).toBe(output);
            },
            [
                [1, "I"],
                [2, "II"],
                [3, "III"],
                [4, "IV"],
                [5, "V"],
                [6, "VI"],
                [7, "VII"],
                [8, "VIII"],
                [9, "IX"],
                [10, "X"],
                [11, "XI"],
                [14, "XIV"],
                [46, "XLVI"],
                [99, "XCIX"],
                [100, "C"],
                [101, "CI"],
                [487, "CDLXXXVII"],
                [1967, "MCMLXVII"],
                [3000, "MMM"],
                [3001, "num is too big!"]
            ]);
    });
} ());

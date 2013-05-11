/// <reference path="RomanNumerals.js" />
/// <reference path="jasmine-1.3.1/jasmine.js" />

(function () {

    "use strict";

    describe("Roman Numerals Tests", function () {

        it("1 gives I", function () {
            var actual = romanNumerals(1);
            expect(actual).toBe("I");
        });

        it("2 gives II", function () {
            var actual = romanNumerals(2);
            expect(actual).toBe("II");
        });

        it("3 gives III", function () {
            var actual = romanNumerals(3);
            expect(actual).toBe("III");
        });

        it("4 gives IV", function () {
            var actual = romanNumerals(4);
            expect(actual).toBe("IV");
        });

        it("5 gives V", function () {
            var actual = romanNumerals(5);
            expect(actual).toBe("V");
        });

        it("6 gives VI", function () {
            var actual = romanNumerals(6);
            expect(actual).toBe("VI");
        });

        it("7 gives VII", function () {
            var actual = romanNumerals(7);
            expect(actual).toBe("VII");
        });

        it("8 gives VIII", function () {
            var actual = romanNumerals(8);
            expect(actual).toBe("VIII");
        });

        it("9 gives IX", function () {
            var actual = romanNumerals(9);
            expect(actual).toBe("IX");
        });

        it("10 gives X", function () {
            var actual = romanNumerals(10);
            expect(actual).toBe("X");
        });

        it("11 gives XI", function () {
            var actual = romanNumerals(11);
            expect(actual).toBe("XI");
        });

        it("14 gives XIV", function () {
            var actual = romanNumerals(14);
            expect(actual).toBe("XIV");
        });

        it("46 gives XLVI", function () {
            var actual = romanNumerals(46);
            expect(actual).toBe("XLVI");
        });

        it("99 gives XCIX", function () {
            var actual = romanNumerals(99);
            expect(actual).toBe("XCIX");
        });

        it("100 gives C", function () {
            var actual = romanNumerals(100);
            expect(actual).toBe("C");
        });

        it("101 gives CI", function () {
            var actual = romanNumerals(101);
            expect(actual).toBe("CI");
        });

        it("487 gives CDLXXXVII", function () {
            var actual = romanNumerals(487);
            expect(actual).toBe("CDLXXXVII");
        });

        it("1967 gives MCMLXVII", function () {
            var actual = romanNumerals(1967);
            expect(actual).toBe("MCMLXVII");
        });

        it("3000 gives MMM", function () {
            var actual = romanNumerals(3000);
            expect(actual).toBe("MMM");
        });

        it("Anything greater than 3000 returns appropriate error message", function () {
            var actual = romanNumerals(3001);
            expect(actual).toBe("num is too big!");
        });
    });
} ());

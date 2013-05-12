// ReSharper disable InconsistentNaming

(function () {

    "use strict";

    window.romanNumerals = function (num) {

        var DECADE_DATA = [
            ["III", "V", "X"],
            ["XXX", "L", "C"],
            ["CCC", "D", "M"],
            ["MMM", "?", "?"]
        ];

        var handleFirstDigit = function (numString) {

            var result = "";

            if (numString.length === 0) {
                return result;
            }

            var digit = Number(numString[0]);

            var dataForThisDecade = DECADE_DATA[numString.length - 1];
            var oneChars = dataForThisDecade[0];
            var fiveChar = dataForThisDecade[1];
            var tenChar = dataForThisDecade[2];

            if (digit >= 1 && digit <= 3) {
                result += oneChars.substr(0, digit);
            } else if (digit === 4) {
                result += oneChars[0] + fiveChar;
            } else if (digit >= 5 && digit <= 8) {
                result += fiveChar;
                result += oneChars.substr(0, digit - 5);
            } else if (digit === 9) {
                result += oneChars[0] + tenChar;
            }

            return result + handleFirstDigit(numString.substr(1));
        };

        if (num > 3000) {
            return "num is too big!";
        }

        return handleFirstDigit(num.toString());
    };
} ());

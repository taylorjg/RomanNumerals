// ReSharper disable InconsistentNaming

(function() {

    "use strict";

    window.romanNumerals = function(num) {

        var DECADE_DATA = [
            ["I", "V", "X"],
            ["X", "L", "C"],
            ["C", "D", "M"],
            ["M", "?", "?"]
        ];

        var handleFirstDigit = function(numString) {

            var result = "";

            if (numString.length === 0) {
                return result;
            }

            var digit = Number(numString[0]);

            var dataForThisDecade = DECADE_DATA[numString.length - 1];
            var unitChar = dataForThisDecade[0];
            var fiveChar = dataForThisDecade[1];
            var tenChar = dataForThisDecade[2];
            var i;

            if (digit >= 1 && digit <= 3) {
                for (i = 1; i <= digit; i++) {
                    result += unitChar;
                }
            } else if (digit === 4) {
                result = unitChar + fiveChar;
            } else if (digit >= 5 && digit <= 8) {
                result = fiveChar;
                for (i = 6; i <= digit; i++) {
                    result += unitChar;
                }
            } else if (digit === 9) {
                result = unitChar + tenChar;
            }

            return result + handleFirstDigit(numString.substr(1));
        };

        if (num > 3000) {
            return "num is too big!";
        }

        return handleFirstDigit(num.toString());
    };
}());

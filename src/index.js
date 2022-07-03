module.exports = function toReadable(number) {

    let arrOfoneDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrOftwoDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrOftensOfNumbers = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let strOfNumber = String(number);
    let length = strOfNumber.length;

    if (length == 1) {
        return arrOfoneDigit[number];
    }

    if (length == 2 && strOfNumber[0] == 1) {
        return arrOftwoDigit[+strOfNumber[1]];
    }

    if (length == 2 && strOfNumber[0] != 1 && strOfNumber[1] == 0) {
        return arrOftensOfNumbers[+strOfNumber[0]];
    }

    if (length == 2 && strOfNumber[0] != 1) {
        return arrOftensOfNumbers[+strOfNumber[0]] + ' ' + arrOfoneDigit[+strOfNumber[1]];
    }

    if (length == 3 && strOfNumber[1] == 0 && strOfNumber[2] == 0) {
        return arrOfoneDigit[+strOfNumber[0]] + ' ' + 'hundred';
    }

    if (length == 3 && strOfNumber[1] == 0 && strOfNumber[2] != 0) {
        return arrOfoneDigit[+strOfNumber[0]] + ' ' + 'hundred' + ' ' + arrOfoneDigit[+strOfNumber[2]];
    }

    if (length == 3 && strOfNumber[1] == 1) {
        return arrOfoneDigit[+strOfNumber[0]] + ' ' + 'hundred' + ' ' + arrOftwoDigit[+strOfNumber[2]];
    }

    if (length == 3 && strOfNumber[1] != 1 && strOfNumber[2] == 0) {
        return arrOfoneDigit[+strOfNumber[0]] + ' ' + 'hundred' + ' ' + arrOftensOfNumbers[+strOfNumber[1]];
    }
    if (length == 3) {
        return arrOfoneDigit[+strOfNumber[0]] + ' ' + 'hundred' + ' ' + arrOftensOfNumbers[+strOfNumber[1]] + ' ' + arrOfoneDigit[+strOfNumber[2]];
    }
}

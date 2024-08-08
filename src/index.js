module.exports = function toReadable(number) {
    // return number.toString();
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


    if (number === 0) {
        return ones[0];
    }

    let result = '';

    if (number >= 100) {
        result += ones[Math.floor(number / 100)] + ' hundred';
        number %= 100;
        if (number > 0) result += ' ';
    }

    if (number >= 20) {
        result += tens[Math.floor(number / 10)];
        number %= 10;
        if (number > 0) result += ' ' + ones[number];
    } else if (number >= 10) {
        result += teens[number - 10];
    } else if (number > 0) {
        result += ones[number];
    }

    return result;
}
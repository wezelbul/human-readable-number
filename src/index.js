const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


module.exports = function toReadable(number) {
    let strNum = number.toString();
    let resultString = " ";
    const numLength = number.length;
    if (strNum[0] === '-') {
        resultString += 'minus ';
        strNum = strNum.substring(1);
    }
    while (parseInt(strNum[0]) === 0) {
        strNum = strNum.substring(1);
    }
    if (strNum.length === 0) {
        return ones.at(0);
    }
    for (let i = 0; i < strNum.length; i++) {
        if (isNaN(strNum[i])) {
            throw new Error("wrong input");
        }
    }
    if (strNum.length > 3) {
        throw new Error("wrong number length");
    }
    while (strNum.length !== 0) {
        switch (strNum.length) {
            case 3:
                resultString += ones.at(parseInt(strNum[0])) + " hundred "
                break;
            case 2:
                if (parseInt(strNum[0]) === 0) {

                } else if (parseInt(strNum[0]) === 1) {
                    resultString += teens.at(parseInt(strNum[1]));
                    strNum = strNum.substring(1);
                } else {
                    resultString += tens.at(parseInt(strNum[0])) + " ";
                }
                break;
            case 1:
                if (numLength === 1 || parseInt(strNum[0]) !== 0) {
                    resultString += ones.at(parseInt(strNum[0]));
                }
                break;
        }
        strNum = strNum.substring(1);
    }
    return resultString.trim();
}

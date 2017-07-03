'use strict';
const arrOfLetters = [];

function findF() {
    let string = $('#some-string').val().split('');

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "f") {
            arrOfLetters.push(i);
        }
    }

    if (arrOfLetters.length === 1) {
        printHtml("-1")
    } else if (arrOfLetters.length === 0) {
        printHtml("-2")
    } else {
        printHtml(arrOfLetters[1]);
    }

}

function printHtml(res) {
    $('#space-for-print').html(res)
}
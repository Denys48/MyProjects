function deleteCharBasic(string, chars) {
    let result = '';
    for (const ch of string) {
        if (!chars.includes(ch)) {
            result += ch;
        }
    }

    return result;
}

function deleteCharArr(string, chars) {
    const phraseArr = [...string];
    let result = phraseArr.filter(ch => !chars.includes(ch));
    return result.join('');
}

function deleteCharSplitJoin(string, chars) {
    let result = string;
    for (const char of chars) {
        result = result.split(char).join('');
    }
    return result;
}

function deleteCharSet(string, chars) {
    let result = '';
    const charSet = new Set(chars);

    for (const ch of string) {
        if (!charSet.has(ch)) {
            result += ch;
        }
    }

    return result;
}

function deleteCharRegexp(string, chars) {
    const escaped = chars.map(ch => ch.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join('');

    const pattern = new RegExp(`[${escaped}]`, 'g');

    return string.replace(pattern, '');
}

let string = prompt("Enter your string:");
let charsStr = prompt("Enter the characters to delete:", "abc");

string = string !== null ? string : "";
charsStr = charsStr !== null ? charsStr : "";
const charsArr = [...charsStr];

console.log(deleteCharSet(string, charsArr));




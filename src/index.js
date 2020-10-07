module.exports = function check(str, bracketsConfig) { // check ( '([{}])' ,  [ [ '(' ,  ')' ] ,  [ '[' ,  '] ' ],  [ '{' ,  '}' ] ] )
    let arrFromStr = str.trim().split(' ');
    let brackets = [];
    arrFromStr = arrFromStr.join('').split('');

    while (arrFromStr.length != 0) {
        let count = 0;
        bracketsConfig.forEach(item => {
            for (let i = 0; i < arrFromStr.length; i++) {
                item = item.join('').trim();
                item = item.split(' ').join('').split('');
                if (item.join('') == arrFromStr.slice(i, i + 2).join('').trim()) {
                    brackets.push(true);
                    return arrFromStr.splice(i, 2);
                }
            }
            count++;
        });
        if (arrFromStr.length == 1 || count == bracketsConfig.length) return false;
    }

    return Array.isArray(brackets);
}

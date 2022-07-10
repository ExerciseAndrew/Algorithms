var longestCommonPrefix = function(strArr) {
    if (strArr.length === 0) {
        return '';
    }
    

    for (let i = 0; i<strArr[0].length; i++) {
        let char = strArr[0][i];
        for (let j = 1; j<strArr.length; j++) {
            if (i===strArr[j].length || strArr[j][i] !== char) {
                return strArr[0].substring(0, i);
            }
        }
    }
    return strArr[0];

};

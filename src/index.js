module.exports = function check(str, bracketsConfig) {
 let arr = [];

    let pairs = {
        ")" : "(",
        "}": "{",
        "]" : "[",
            }
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
            arr.push(str[i]);
        }
        else if (arr[arr.length - 1] == pairs[str[i]]) {
            arr.pop()
        }
        else return false
    }
    return arr.length ? false : true
}

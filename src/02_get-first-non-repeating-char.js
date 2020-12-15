/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution(str) {


    var charsert = str.split('')
    var firstUniqueChar = ""
    for (const iterator of charsert) {
        let flag = false
        let i = 0
        for (const iterator2 of charsert) {

            if (iterator == iterator2) {
                flag = true
                i++
                if (1 < i)
                    break
            }

        }
        if ((flag) && (1 == i)) {
            firstUniqueChar = iterator
            break
        }

    }

    return firstUniqueChar

}

module.exports = solution

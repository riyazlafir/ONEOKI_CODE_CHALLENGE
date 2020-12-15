/**
 * This function returns the values of the input object as an array
 * @param {object} obj
 */
function solution (obj) {
    var arraylist =[]
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            
            arraylist.push(element)
        }
    }

    return arraylist;
}

module.exports = solution

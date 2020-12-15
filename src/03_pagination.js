/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution(pageNumber, itemsPerPage, pageData) {

  if (pageNumber <= 0) {
    pageNumber = 1
  }
  var i
  var j
  var temparray
  var returnData = []


  for (i = 0, j = pageData.length; i < j; i += itemsPerPage) {
    temparray = pageData.slice(i, i + itemsPerPage);
    returnData.push(temparray)

  }

  if (returnData[pageNumber - 1] == undefined) {
    return null
  }
  else { return returnData[pageNumber - 1] }
}

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]


module.exports = { solution, data }

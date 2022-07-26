
// You should implement your task here.

module.exports = function towelSort (matrix) {
  result = [];
  if (matrix == undefined) {return []}
  else {matrix.forEach((element, index) => {if (index % 2 === 0) {result[index] = element}
  else {result[index] = element.reverse()}});
  return result.flat()}
}
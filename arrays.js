var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
const array = [1,2,3]
function addElementToBeginningOfArray(array,element) {
  return ["foo",...array]}
  function destructivelyAddElementToBeginningOfArray(array, element) {
    return array.unshift("foo")
    ,array}
    function addElementToEndOfArray(array,element) {
      return [...array,"foo"]}
      function destructivelyAddElementToEndOfArray(array, element) {
        return array.push("foo"),array}
  function accessElementInArray(array, index) {
    return (3)}
    function destructivelyRemoveElementFromBeginningOfArray(array) {
      return array.shift(),array}
    function removeElementFromBeginningOfArray(array) {
      return array.slice(1)}
    function destructivelyRemoveElementFromEndOfArray(array) {
      return array.pop(),array}
      function removeElementFromEndOfArray(array) {
        array.slice(3)}
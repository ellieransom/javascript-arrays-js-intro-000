var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];




var addElementToBeginningOfArray = (myArray, myElement) => {
  newArray = [myElement, ...myArray]
  return newArray
}


var addElementToBeginningOfArray = (myArray, myElement) => {
  newArray = myArray.unshift(myElement)
  return newArray
}


var addElementToEndOfArray = (myArray, myElement) => {
  newArray = [...myArray, myElement]
  return newArray
}


var destructivelyAddElementToEndOfArray = (myArray, myElement) => {
  newArray = myArray.push(myElement)
  return newArray
}

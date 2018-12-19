var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];




var addElementToBeginningOfArray = (myArray, myElement) => {
  newArray = [myElement, ...myArray]
  return newArray
}


var destructivelyAddElementToBeginningOfArray = (myArray, myElement) => {
  myArray.unshift(myElement)
  return myArray
}


var addElementToEndOfArray = (myArray, myElement) => {
  newArray = [...myArray, myElement]
  return newArray
}


var destructivelyAddElementToEndOfArray = (myArray, myElement) => {
  myArray.push(myElement)
  return myArray
}

var addElementToBeginningOfArray = (myArray, myElement) => {
  newArray = [myElement, ...myArray]
  return newArray
}


var destructivelyAddElementToEndOfArray = (myArray, myElement) => {
  newArray = myArray.unshift(myElement)
  return newArray
}

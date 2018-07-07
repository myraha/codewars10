function reverseWords(str) {
  let newStr = ""
  let myArr = str.split(" ")
  for (i = 0; i < myArr.length; i++){
    let word = myArr[i]
    word = word.split('')
    word= word.reverse()
    word= word.join('')
    newStr = newStr + word + " "
  }
  return newStr.slice(0, newStr.length-1)
}

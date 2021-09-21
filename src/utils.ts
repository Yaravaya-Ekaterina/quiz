import { Country } from './interface/country.interface'

export const generateIndexCountry = (
  arrayFindDataObject,
  num: number,
  correctAnswerName?: string
): Country[] => {
  let uniqueNumber: number[] = []

  while (uniqueNumber.length < num) {
    let generateNumber = Math.floor(Math.random() * 250) + 1
    if (
      !uniqueNumber.includes(generateNumber) &&
      arrayFindDataObject[generateNumber].name !== correctAnswerName
    ) {
      uniqueNumber.push(generateNumber)
    }
  }

  if (arrayFindDataObject.length) {
    return uniqueNumber.map(item => {
      return arrayFindDataObject.find((country, idx) => {
        if (item === idx + 1) {
          return country
        }
      })
    })
  }
  return []
}

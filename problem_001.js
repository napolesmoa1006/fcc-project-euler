
const multiplesOf3and5 = (number) => {
  const endFive = parseInt(number / 5)
  const endThree = parseInt(number / 3)

  let sum = 8
  for (let i = 2; i <= endThree; i++) {
    const five = 5 * i
    const three = 3 * i

    if (three % 5 != 0)
      sum += three

    if (i <= endFive && five != number)
      sum += five
  }

  return sum
}

console.log(multiplesOf3and5(1000))

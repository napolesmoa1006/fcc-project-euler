
const fiboEvenSum = (n) => {
  let sum = 2
  let prev = 1
  let next = 2

  while (next <= n) {
    let even = false
    for (let i = 2; i * i <= next; i++) {
      if (next % 2 == 0) {
        even = true
        break
      }
    }

    if (even)
      sum += next

    const aux = prev
    prev = next
    next += aux
  }

  return sum
}

console.log(fiboEvenSum(4000000))

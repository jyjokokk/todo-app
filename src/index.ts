export function filterNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number > 0)
}

export function lol(a: string, b: string): string[] {
  console.log(`${a} ${b}`)
  return [b]
}

const nArr: number[] = [1, 2, 3, 4, 5]
console.log(filterNumbers(nArr))

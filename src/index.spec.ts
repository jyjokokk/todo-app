import { filterNumbers } from './index'

describe('filterNumbers', () => {
  it('should return an array with only positive numbers', () => {
    const result = filterNumbers([1, -2, 3, 0, -5, 6])
    expect(result).toEqual([1, 3, 6])
  })

  it('should return an empty array if all numbers are non-positive', () => {
    const result = filterNumbers([-1, -2, 0, -5])
    expect(result).toEqual([])
  })

  it('should return the same array if all numbers are positive', () => {
    const result = filterNumbers([1, 2, 3, 4, 5])
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should return an empty array if the input array is empty', () => {
    const result = filterNumbers([])
    expect(result).toEqual([])
  })
})

import { MathOperations } from '../src/math-operations'

describe('MathOperations Class testing method add', () => {
  let mathOps: MathOperations

  test('should add two positive numbers correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.add(2, 3)).toBe(5)
  })

  test('should add negative and positive number correctly', () => {
    mathOps = new MathOperations()
    expect(mathOps.add(-3, 3)).toBe(0)
  })
})

describe('MathOperations Class testing method squaring', () => {
  let mathOps: MathOperations
  test('Tshould squaring correctly positive number', () => {
    mathOps = new MathOperations()
    expect(mathOps.squaring(2)).toBe(4)
  })
  test('Tshould squaring correctly positive number', () => {
    mathOps = new MathOperations()
    expect(mathOps.squaring(-2)).toBe(4)
  })
})

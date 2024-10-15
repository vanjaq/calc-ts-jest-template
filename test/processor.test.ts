import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor

beforeEach(() => {
  user = new User('Alex', 'Shidlovskii', '123456', 'test', 18)
  processor = new Processor()
})

test('check new user undefined', () => {
  expect(user.consentGiven).toBeUndefined()
})

test('check Processor approve', () => {
  processor.givenConcent(user)
  expect(user.consentGiven).toBe(true)
})

test('check processor verify', () => {
  processor.givenConcent(user)
  expect(processor.checkConsent(user)).toBeTruthy()
})

test('negative check', () => {
  expect(processor.checkConsent(user)).toBeFalsy()
})

test('check age less then 18 and can not get consent given', () => {
  if (user.age < 18) {
    expect(processor.checkAge(user)).toBeFalsy()
  }
})

test('check age more then 18 and can get consent given', () => {
  if (user.age >= 18) {
    expect(processor.checkAge(user)).toBeTruthy()
  }
})

test('check that concent given revoke', () => {
  if (user.age < 18) {
    expect(processor.revokeConsent(user)).toBeUndefined()
  }
})

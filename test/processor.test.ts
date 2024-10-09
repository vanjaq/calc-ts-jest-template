import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor

beforeEach(() => {
  user = new User('Alex', 'Shimit', '123456', 'test')
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

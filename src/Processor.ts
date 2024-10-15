import { User } from './User'

export class Processor {
  givenConcent(User: User): void {
    User.consentGiven = true
  }

  checkConsent(user: User): boolean {
    return user.consentGiven === true
  }

  checkAge(user: User): boolean {
    if (user.age >= 18) {
      return (user.consentGiven = true)
    } else {
      return (user.consentGiven = false)
    }
  }

  revokeConsent(user: User): undefined {
    if (user.age < 18) {
      user.consentGiven = undefined
    }
  }
}

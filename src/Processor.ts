import { User } from './User'

export class Processor {
  givenConcent(User: User): void {
    User.consentGiven = true
  }

  checkConsent(user: User): boolean {
    return user.consentGiven === true
  }
}

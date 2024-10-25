export class UserBase{

    name:string
    surname: string
    age: number
    personalCode: number
    phone: number
    address: string

    constructor(name: string, surname: string, age: number, personalCode: number,  phone: number, address: string) {
        this.name = name
        this.surname = surname
        this.age = age
        this.personalCode = personalCode
        this.phone = phone
        this.address = address
    }

}
import {UserBase} from "./User-base";

export class UserEstonia extends UserBase{

    mobileIDAuthorization: undefined|boolean

    constructor(name: string, surname: string, age: number, personalCode: number,  phone: number, address: string) {
        super(name,surname,age,personalCode,phone,address)
        this.mobileIDAuthorization = undefined

    }


}
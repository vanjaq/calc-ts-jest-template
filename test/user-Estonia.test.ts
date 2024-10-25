import {UserEstonia} from "../src/User-Estonia";
import {KYC} from "../src/KYC";

let userEstonia: UserEstonia
let kyc: KYC

beforeEach(() => {
    userEstonia= new UserEstonia('Ivan', 'Shidlovskii', 17, 123, 89964056946, 'Bespalova street 110K')
})

test('default value for mobile authoriztion', () =>{
    expect(userEstonia.mobileIDAuthorization).toBeUndefined()
})

test('check that activation is working for users > 16', () => {
    if (userEstonia.age > 16){
        expect(kyc.activateMobileIDForEstonia(userEstonia)).toBeTruthy()
    }
})


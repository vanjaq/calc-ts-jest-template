import {UserEstonia} from "./User-Estonia";
import {UserLatvia} from "./User-Latvia";

export class KYC{


    MobileAuthorizationLatviaID(UserLatvia:UserLatvia): void{
        UserLatvia.activateEParakstsForLatvia = undefined
    }

    activateMobileIDForEstonia(UserEstonia:UserEstonia):void {
        if (UserEstonia.age < 16){
            throw new Error('User is too young')
        } else {
            UserEstonia.mobileIDAuthorization = true
        }
    }

    activateEParakstsForLatvia(UserLatvia:UserLatvia): void{
        if (UserLatvia.age < 18){
            throw new Error('User is too young')
        } else {
            UserLatvia.activateEParakstsForLatvia = true
        }
    }

}
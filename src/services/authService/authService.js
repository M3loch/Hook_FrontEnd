import apiConfig from "./apiConfig"

class AuthService {


    static async authByToken( token ) {

        const result = {
            isExist : false,
            user: null
        }

        try {
            let response = await fetch(apiConfig.byToken(token)) 
            if (response.status == 200){
                result.isExist = true
                result.user = await response.json()
            }
            return result
        } catch (error) {
            console.error(error)
        }
    }

    static async isExist(phoneNumber) {

        try {
            let response = await fetch(apiConfig.isExist(phoneNumber)) 
            let result = await response.json()
            if (response.status == 200){
                return result
            }
            else {
                return false
            }
        } catch (error) {
            console.error(error)
        }

    }

    static async logIn( phone, pass ) {

        
        const result = {
            isExist : false,
            user: null
        }

        const {path, body} = apiConfig.logIn(phone, pass)
        try {
            let response = await fetch(path, body) 
            if (response.status == 200){
                result.isExist = true
                result.user = await response.json()
            }
            return result
        } catch (error) {
            console.error(error)
        }
    }

    static async register( phone, firstName, lastName, pass ) {
        const {path, body} = apiConfig.register( phone, firstName, lastName, pass )
        try {
            let response = await fetch(path, body) 
            let result = await response.json()

            if (!(response.status == 200 && !("detail" in result))) {
                return false
            }

            return result 

        } catch (error) {
            console.error(error)
        }
    }

}

export default AuthService
import apiConfig from "./apiConfig"

class UserService{

    static async register( phoneNumber, firstName, familyName, pass ) {
        const {path, body} = apiConfig.register( phoneNumber, firstName, familyName, pass )
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

    static async updateUser( userID, accessToken, updateRequest ){
        const {path, body} = apiConfig.updateUser( userID, accessToken, updateRequest )
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

export default UserService
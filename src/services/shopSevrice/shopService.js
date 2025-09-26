import apiConfig from "./apiConfig"

class ShopService{

    static async createShop( { userID, accessToken, shopName } ){

        const {path, body} = apiConfig.createShop(userID, accessToken, shopName)

        try {
            const response = await fetch( path , body )
            return response.status == 200 && await response.json()
        } catch (error) {
            console.error(error)
        }
    }

    static async getShop( shopID, userID ){
        try {
            const response = await fetch(apiConfig.getShop(shopID, userID))
            return response.status == 200 && await response.json()
        } catch (error) {
            console.error(error)
        }
    }

    static async updateShop(accessToken, userID, shopID, updateRequest){
        const {path, body} = apiConfig.updateShop(accessToken, userID, shopID, updateRequest)
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

export default ShopService
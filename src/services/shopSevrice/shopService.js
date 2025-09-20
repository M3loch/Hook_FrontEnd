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
}

export default ShopService
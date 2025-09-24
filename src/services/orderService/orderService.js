import apiConfig from "./apiConfig"

class OrderService {


    static async getOrders( shopID, userID ) {

        try {
            let response = await fetch(apiConfig.getOrders(shopID, userID)) 
            if (response.status == 200){
                return await response.json()
            }
        } catch (error) {
            console.error(error)
        }
    }

    static async createOrder({
        userID, 
        shopID,
        tableID = null,
        discountID = null,
        categoryID = null,
        strength,
        flavoures = [],
        isPaid = false,
        comment,
    }){

        const startTime = Date.now()

        const requestBody = {
            shop_id: shopID,
            start_time : startTime, 
            table_id: tableID,
            discount_id: discountID,
            category_id: categoryID,
            strength: strength,
            flavoures: flavoures,
            is_paid: isPaid,
            comment: comment
        }
        const {path, body} = apiConfig.createOrder(userID, requestBody)

        const response = await fetch(path, body)

        return response.status == 200 && await response.json()
    }

    static async closeOrder(orderID, closeStatus, userID, shopID){
        const requestBody = {
            order_id: orderID,
            shop_id: shopID,
            user_id: userID,
            close_status: closeStatus,
            close_time: Date.now()
          }
        const {path, body} = apiConfig.closeOrder(requestBody)

    const response = await fetch(path, body)
    return response.status == 200 && await response.json()
    }
}

export default OrderService
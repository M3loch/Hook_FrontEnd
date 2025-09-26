class apiConfig {

    static _method = 'http://';
    static _host = "127.0.0.1:8000/";

    static _body(body=null, method="POST"){
        return {
            method: method,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body && JSON.stringify(body) 
        }
    }

    static createShop(userID, accessToken, shopName) {
        return {
            path : this._method + this._host + `shops/create/?access_token=${accessToken}`,
            body: this._body(
                { 
                    user_id : userID,
                    shop_name: shopName
                }
            )

        }
    }

    static getShop ( shopID, userID ){
        return this._method + this._host + `shops/get_info/?shop_id=${shopID}&user_id=${userID}`
    }

    static toggleShift ( shopID, userID ){
        return {
            path: this._method + this._host + `shops/toggle_shift/?shop_id=${shopID}&user_id=${userID}`,
            body: this._body()
            
        } 
    }

    static updateShop(accessToken, userID, shopID, updateRequest){
        for (let key in updateRequest){
            if (["shop_id"].includes(key)){
                delete updateRequest[key]
            } else {
                if (!updateRequest[key]) {
                    delete updateRequest[key]
                } 
            }
        } 

        return {
            path: this._method + this._host + `shops/update/?access_token=${accessToken}&user_id=${userID}&shop_id=${shopID}`,
            body : this._body(updateRequest, "PUT")
        }
    }
}

export default apiConfig
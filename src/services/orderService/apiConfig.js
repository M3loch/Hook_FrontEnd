class apiConfig {

    static _method = 'http://';
    static _host = "127.0.0.1:8000/";

    static _body(body, method="POST"){
        return {
            method: method,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body && JSON.stringify(body) 
        }
    }

    static getOrders( shopID, userID ){
        return (
            this._method + this._host + `orders/get/?shop_id=${shopID}&user_id=${userID}`
        )
    } 

    static createOrder( userID, body ){
        return {
            path : this._method + this._host + `orders/create/?user_id=${userID}`,
            body : this._body(body)
        }
    }

    static closeOrder(body){
        return ({
            path: this._method + this._host + `orders/close/`,
            body: this._body(body, "PUT")
        })
    }
}

export default apiConfig
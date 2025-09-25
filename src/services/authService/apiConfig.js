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

    static isExist( phoneNumber ){
        return (
            this._method + this._host + `auth/is_exist/?phone_number=${phoneNumber}`
        )
    }

    static byToken( token ) {
        return (
            this._method + this._host + `auth/by_token/?access_token=${token}`
        )
    }

    static logIn( phone, pass ) {

        return {
            path: this._method + this._host + `auth/log_in/`,

            body: this._body(
                { 
                    phone_number: String(phone),
                    password: String(pass)
                }
            )
            
        }

    }

    static update( ){

    }
}

export default apiConfig
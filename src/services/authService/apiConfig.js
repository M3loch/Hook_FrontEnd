class apiConfig {

    static _method = 'http://';
    static _host = "127.0.0.1:8000/";

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

            body: {
                method: "POST",
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( 
                    {
                        phone_number: String(phone),
                        password: String(pass)
                    }
                ) 
            }
        }

    }

    static register( phone,  firstName, lastName, pass) {

        return {
            path: this._method + this._host + `users/create/`,

            body: {
                method: "POST",
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( 
                    {
                        phone_number: String(phone),
                        first_name: String(firstName),
                        family_name: String(lastName),
                        password: String(pass)
                    }
                ) 
            }
        }

    }
}

export default apiConfig
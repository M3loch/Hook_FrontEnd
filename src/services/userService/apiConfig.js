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

    static register( phoneNumber,  firstName, familyName, pass ) {

        return {
            path: this._method + this._host + `users/create/`,

            body: this._body(
                { 
                    phone_number: String(phoneNumber),
                    first_name: String(firstName),
                    family_name: String(familyName),
                    password: String(pass)
                }
            ) 
            
        }

    }

    static updateUser( userID, accessToken, updateRequest ){

        for (let key in updateRequest){
            if (!["password", "first_name", "family_name", "phone_number"].includes(key)){
                delete updateRequest[key]
            } else {
                if (!updateRequest[key]) {
                    delete updateRequest[key]
                } 
            }
        } 

        return {
            path: this._method + this._host + `users/update/?user_id=${userID}&access_token=${accessToken}`,
            body : this._body(updateRequest, "PUT")
        }
    }


}

export default apiConfig
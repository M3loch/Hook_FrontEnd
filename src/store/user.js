import AuthService from "../services/authService/authService"
import ShopService from "../services/shopSevrice/shopService"
import { makeAutoObservable, toJS } from "mobx"

class User{

    userID = undefined
    accessToken = undefined

    phoneNumber = undefined
    firstName = undefined
    familyName = undefined

    _shops = []

    isAuth = false


    constructor(){
        makeAutoObservable(this)
        this._hasToken() && this._init()
    }

    async _init(){
        if (this._hasToken){

            const response = await AuthService.authByToken(this._getToken())
            response.isExist
                ? this._setUser(response.user)
                : this.logOut()
            this._setIsAuth(response.isExist)
        }
    }


    _hasToken( ) { 
        try {
            return localStorage.getItem('access_token') != null
        } catch (error) {
            console.error(error)
        }
    }

    _getToken( ) {
        try {
            const token = localStorage.getItem('access_token')
            return token
        } catch (error) {
            console.error(error)
        }
    }

    _setToken( token ) {
        try {
            localStorage.setItem('access_token', token)
        } catch (error) {
            console.error(error)
        }
    }

    
    _clearToken(){
        localStorage.removeItem('access_token')
    }
    
    _setUser({user_id, phone_number, first_name, family_name, access_token, shops}){
        this.userID = user_id
        this.phoneNumber = phone_number
        this.firstName = first_name
        this.familyName = family_name
        this.accessToken = access_token
        this._shops = shops
        
    }
    
    _setIsAuth(bool){
        this.isAuth = bool
        console.log(this.isAuth)
    }

    async isExist(phoneNumber){
        return await AuthService.isExist(phoneNumber)
    }

    async logIn(phoneNumber, pass) {
        const response = await AuthService.logIn(phoneNumber, pass)
        console.log(response)
        response.isExist && this._setUser(response.user) & this._setToken(response.user.access_token)
        this._setIsAuth(response.isExist)
        return response.isExist
    }

    async register(phoneNumber, firstName, familyName, password){
        const response = await AuthService.register(phoneNumber, firstName, familyName, password)
        response
            ? await this.logIn(phoneNumber, password)
            : null
        }
    
    
    logOut() {
        this._setIsAuth(false)
        this._hasToken()
            ? this._clearToken()
            : null
        this.user_id = undefined, 
        this.phone_number = undefined, 
        this.first_name = undefined, 
        this.family_name = undefined,
        this._shops = undefined
    }

    get shops(){
        return toJS(this._shops)
    }
    set shops(shops){
        this._shops = shops
    }

    async createShop(shopName){
        const newShopList = await ShopService.createShop({
            userID: this.userID,
            accessToken: this.accessToken,
            shopName: shopName
        })
        newShopList
            ? this.shops = newShopList
            : null
        return newShopList && true
    }

}

export default User
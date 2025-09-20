import ShopService from "../services/shopSevrice/shopService"
import { makeAutoObservable, toJS } from "mobx";

class Shop{

    _user = ''

    _shopID = ''
    _shopName = ''
    _tables = []
    _stages = []
    _discounts = undefined
    _roles = undefined
    _ordersAttributes = undefined
    _roleName = undefined

    constructor(){
        makeAutoObservable(this)
    }


    set user(user){
        this._user = user
    }

    _setShop({shop_id, shop_name, tables, stages, discounts, roles, orders_attributes, role_name})
    {
        this._shopID = shop_id
        this._shopName = shop_name
        this._roleName = role_name

        this._tables = tables && tables 
        this._stages = stages && stages
        this._discounts = discounts && discounts
        this._roles = roles && roles
        this._ordersAttributes = orders_attributes && orders_attributes
    }

    async getShop(shopID){
        const shop = await ShopService.getShop(shopID, this._user)
        this._setShop(shop)
    }

}
export default Shop
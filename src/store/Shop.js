import ShopService from "../services/shopSevrice/shopService"
import { makeAutoObservable, toJS } from "mobx";
import OrderService from "../services/orderService/orderService";

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
    _isChosen = false;

    constructor(){
        makeAutoObservable(this)
    }


    set user(user){
        this._user = user
    }

    _setShop({shop_id, shop_name, tables, stages, discounts, roles, categories, pages})
    {
        this._shopID = shop_id
        this._shopName = shop_name
        this._categories = categories && categories
        this._tables = tables && tables 
        this._stages = stages && stages
        this._discounts = discounts && discounts
        this._roles = roles && roles
        this._isChosen = true
        this._pages = pages 
    }

    async getShop(shopID){
        const shop = await ShopService.getShop(shopID, this._user)
        this._setShop(shop)
    }

    async updateShop(accessToken, updateRequest){
        const newShopInfo = await ShopService.updateShop(accessToken, this.user, this.shopID, updateRequest)
        newShopInfo && this._setShop(newShopInfo)
        return newShopInfo
    }

    
    async getOrders(){
        return await OrderService.getOrders(this._shopID, this._user)
    }

    async createOrder ({tableID, discountID, categoryID, strength, flavoures, isPaid, comment}){

        return await OrderService.createOrder({
            userID : this._user,
            shopID : this.shopID,
            tableID : tableID,
            discountID: discountID,
            categoryID: categoryID,
            strength: strength,
            flavoures: flavoures,
            is_paid: isPaid,
            comment: comment
            
        })
    }

    async closeOrder(orderID, closeStatus){
        return await OrderService.closeOrder(orderID, closeStatus, this._user, this.shopID)
    }
    
    get shopID(){return this._shopID}
    get user(){return this._user}
    get shopName(){return this._shopName}
    get isChosen(){return this._isChosen}
    get categories(){return this._categories}
    get discounts(){return this._discounts}
    get tables(){return this._tables}
    get pages(){return this._pages}
    get roles(){return this._roles}
}
export default Shop
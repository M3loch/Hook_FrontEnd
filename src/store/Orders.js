import { makeAutoObservable } from "mobx";
import OrderEntity from "../entities/order";


class Orders{

    constructor(shop){
        this._shopInstance = shop
    }

    init(orderArray, setOrders){
        this._orderArray = orderArray
        this._setOrders = setOrders
    };
    
    start(){
        this.time = setInterval(() => {
            this._orderArray = this._orderArray.map(order => {
                order.makeStep();
                return order 
            })
            this._setOrders([...this._orderArray])
        }, 1000);
    }
    
    updateList(array){
        const resultArray = array.map((order) => {
            return new OrderEntity(order, this._shopInstance)
        })

        this._orderArray = resultArray
        this._setOrders([...resultArray])
    }
}

export default Orders
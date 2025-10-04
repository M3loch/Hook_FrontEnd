


import User from "./User";
import Shop from "./Shop";
import Orders from "./Orders";

class Store {

    static User = new User()
    static Shop = new Shop()
    static Orders = new Orders(this.Shop)

}

export default Store
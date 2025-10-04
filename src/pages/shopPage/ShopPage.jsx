import { useContext, useState} from "react"
import { Context } from "../../App"
import OrderGrid from "./widgets/OrderGrid"
import CreateOrderModal from "./widgets/CreateOrderModal"


function ShopPage(){

    const {shop} = useContext(Context)

    const [createOrderModal, setCreateOrderModal] = useState(false)

    return (
        <>
            <div>
                -==ShopHeader==-
                <p>Shop Name = {shop.shopName.data}</p>
                <p>Shop ID = {shop.shopID}</p>
            </div>

            {createOrderModal && <CreateOrderModal
                setCreateOrderModal={setCreateOrderModal}/>}

            <OrderGrid
                setCreateOrderModal={setCreateOrderModal}
            />
        </>

    )
}

export default ShopPage
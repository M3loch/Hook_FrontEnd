import { useContext, useState} from "react"
import { Context } from "../../App"
import OrderGrid from "./widgets/OrderGrid"
import CreateOrderModal from "./widgets/orderModals/CreateOrderModal"


function ShopPage(){

    const {shop} = useContext(Context)

    const [createOrderModal, setCreateOrderModal] = useState(false)

    return (
        <>

            {createOrderModal && <CreateOrderModal
                setCreateOrderModal={setCreateOrderModal}/>}

            <OrderGrid
                setCreateOrderModal={setCreateOrderModal}
            />
        </>

    )
}

export default ShopPage
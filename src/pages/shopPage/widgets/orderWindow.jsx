import OrderGrid from "./OrderGrid"
import ModalWindow from "./modalWindow"
import { useState, useEffect, useContext } from "react"
import { Context } from "../../../App";
import OrderCloseModal from "./OrderCloseModal";

function OrderWindow( ) {
    const {shop} = useContext(Context)

    const [orders, setOrders] = useState(new Array())
    const [createModal, setCreateModal] = useState(false)
    const [closeOrderModal, setCLoseOrderModal] = useState(false)

    useEffect(() => {
        async function fetchData(){
            setOrders( await shop.getOrders() );
        }
        fetchData()
        const intervalId = setInterval(() => {
            fetchData()
        }, 60000);
        return () => {
          clearInterval(intervalId);
        };
      }, [])

    return(
        <div className="orderWindow">
            {createModal && <ModalWindow setOrders={setOrders} setCreateModal={setCreateModal}/>}
            {closeOrderModal && <OrderCloseModal />}
            <OrderGrid 
                orders={orders}
                setCreateModal={setCreateModal}  
                setOrders={setOrders}  
            />
        </>
    )
}
export default OrderWindow
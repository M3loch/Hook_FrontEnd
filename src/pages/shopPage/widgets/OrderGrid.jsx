

import OpenCreateOrderModal from "./OpenCreateOrderModal";
import Order from "./Order";

function OrderGrid({setCreateModal, orders, setOrders}){

      return(
        <div className="ordergrid">
            {orders.map((order) => <Order key={order.order_id} orderID={order.order_id} setOrders={setOrders} />)}
            <OpenCreateOrderModal
                setCreateModal={setCreateModal}  
            />
        </div>
      )

}

export default OrderGrid
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../store/Context";
import Button from "../../../shared/Button";
import Order from "./Order";

import "../styles/orderGrid.css";
import "../styles/newOrderButton.css";

function OrderGrid({ setCreateOrderModal }) {
	const { shop, orders } = useContext(Context);
	const [ordersState, setOrdersState] = useState([]);
	useEffect(() => {
		orders.init(ordersState, setOrdersState);
		async function getOrders() {
			const newOrders = await shop.getOrders();
			orders.updateList(newOrders);
		}
		getOrders();
		setInterval(getOrders, 60000);
		orders.start();
	}, []);

	return (
		<div className="order-grid">
			{ordersState.map((order) => {
				return <Order key={order.orderID} order={order} />;
			})}
			{shop.pages.orders ? (
				<Button
					clickEvent={setCreateOrderModal}
					value={true}
					innerText={"Создать Заказ"}
					className={"new-order-button"}
				/>
			) : null}
		</div>
	);
}

export default OrderGrid;

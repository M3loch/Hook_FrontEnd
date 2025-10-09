import { useState } from "react";
import OrderGrid from "./widgets/OrderGrid";
import CreateOrderModal from "./widgets/orderModals/CreateOrderModal";

function ShopPage() {
	const [createOrderModal, setCreateOrderModal] = useState(false);

	return (
		<>
			{createOrderModal && (
				<CreateOrderModal setCreateOrderModal={setCreateOrderModal} />
			)}

			<OrderGrid setCreateOrderModal={setCreateOrderModal} />
		</>
	);
}

export default ShopPage;

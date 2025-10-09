import { useContext, useState } from "react";
import { Context } from "../../store/Context";
import ShopCard from "./widgets/ShopCard";
import Button from "../../shared/Button";
import NewShopModal from "./widgets/NewShopModal";

import "./styles/userPage.css";

function UserPage() {
	const { user, shop } = useContext(Context);

	const [newShopModal, setNewShopModal] = useState(false);
	const shops = user.shops;
	shop.user = user.userID;

	return !newShopModal ? (
		<div className="shop-list-widget-container">
			<div className="shop-list-container">
				<div className="shop-list">
					{shops.map((shop) => {
						return (
							<ShopCard
								key={shop.shop_id}
								shopName={shop.shop_name}
								shopID={shop.shop_id}
							/>
						);
					})}
				</div>
				<Button
					innerText={"Создать новое заведение"}
					clickEvent={setNewShopModal}
					value={true}
				/>
			</div>
		</div>
	) : (
		<NewShopModal setNewShopModal={setNewShopModal} />
	);
}

export default UserPage;

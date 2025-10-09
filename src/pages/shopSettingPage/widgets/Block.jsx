import Button from "../../../shared/Button";
import Item from "../shared/Item";
import { useContext, useState } from "react";
import NewItemForm from "./NewItemForm";
import { Context } from "../../../store/Context";

import cross from "../../../assets/cross.svg";

import "../styles/block.css";

function Block({ list, itemName, settingName, category, className }) {
	const { shop, user } = useContext(Context);
	const [newItemModal, setNewItemModal] = useState(false);
	const [targetList, setTargetList] = useState(list);

	async function deleteItem(item) {
		const currentList = shop[`${settingName}`].data;
		const newList = [];
		for (let i of currentList) {
			i != item && newList.push(i);
		}

		const updateRequest = {};
		updateRequest[`${settingName}`] = newList;

		const shopInfo = await shop.updateShop(user.accessToken, updateRequest);
		setTargetList(shopInfo[`${settingName}`].data);
	}

	return (
		<div className={`${className}-table`}>
			<div className="block">
				<div className={`block-label ${className}-block-label`}>
					<p>{category}:</p>
				</div>
				<div className={`block-values ${className}-block-values`}>
					{targetList[0] !== undefined ? (
						targetList.map((item) => {
							return (
								<div
									key={crypto.randomUUID()}
									className={`block-value ${className}-block-value`}
								>
									<Item itemName={itemName} itemValue={item} />{" "}
									<Button
										innerText={<img className="cross" src={cross} />}
										clickEvent={deleteItem}
										value={item}
									/>
								</div>
							);
						})
					) : (
						<div
							key={crypto.randomUUID()}
							className={`block-value ${className}-block-value ${className}-na`}
						>
							<p>N/a</p>
						</div>
					)}
				</div>

				<div className={`block-controls ${className}-block-controls`}>
					{newItemModal && (
						<NewItemForm
							setNewItemModal={setNewItemModal}
							settingName={settingName}
							setTargetList={setTargetList}
						/>
					)}
					<Button
						innerText={"Добавить"}
						clickEvent={setNewItemModal}
						value={true}
					/>
				</div>
			</div>
		</div>
	);
}

export default Block;

import { useContext, useState } from "react";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";
import { Context } from "../../../store/Context";

function NewItemForm({ setNewItemModal, settingName, setTargetList }) {
	const { shop, user } = useContext(Context);
	const [newItemName, setNewItemName] = useState("");

	async function updateItems(newItemName) {
		const newList = shop[`${settingName}`].data;
		newList.push(newItemName);

		const updateRequest = {};
		updateRequest[`${settingName}`] = newList;

		const shopInfo = await shop.updateShop(user.accessToken, updateRequest);
		setTargetList(shopInfo[`${settingName}`].data);
		setNewItemModal(false);
	}

	return (
		<div className="pop-up">
			<p>Введите название:</p>
			<Input
				placeholder={"Название"}
				onChange={setNewItemName}
				value={newItemName}
				max={10}
			/>
			<Button
				innerText={"Добавить"}
				clickEvent={updateItems}
				value={newItemName}
			/>
			<Button
				innerText={"Отмена"}
				clickEvent={setNewItemModal}
				value={false}
				className={"hollow-button"}
			/>
		</div>
	);
}

export default NewItemForm;

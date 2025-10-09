import AcceptButton from "../shared/AcceptButton";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";
import { Context } from "../../../store/Context";
import { useContext } from "react";

function IsExistForm({
	isExist,
	setIsExist,
	setPhoneNumber,
	phoneNumber,
	setIsRegistred,
}) {
	const { user } = useContext(Context);

	async function checkIsExist(phoneNumber) {
		const response = await user.isExist(phoneNumber);

		if (response) {
			setIsExist(true);
		} else {
			setIsExist(false);
		}
	}

	return (
		<div className="modal">
			<Input
				placeholder={"Номер телефона"}
				onChange={setPhoneNumber}
				value={phoneNumber}
				type={"text"}
			/>
			<Button clickEvent={checkIsExist} value={phoneNumber} innerText="Войти" />
			{isExist == false ? (
				<Button
					innerText="Регистрация"
					clickEvent={setIsRegistred}
					value={false}
					className="hollow-button"
				/>
			) : null}
		</div>
	);
}
export default IsExistForm;

import { useContext } from "react";
import { Context } from "../../../store/Context";
import Button from "../../../shared/Button";
import Input from "../../../shared/Input";

function LogInForm({ setIsExist, pass, setPass, phoneNumber, setPhoneNumber }) {
	const { user } = useContext(Context);

	async function logIn([phoneNumber, pass]) {
		setIsExist(await user.logIn(phoneNumber, pass));
	}

	return (
		<div className="modal">
			<Input
				placeholder={"Номер телефона"}
				onChange={setPhoneNumber}
				value={phoneNumber}
				type="Text"
			/>
			<Input
				placeholder={"Пароль"}
				onChange={setPass}
				vaule={pass}
				type="Password"
			/>
			<Button
				clickEvent={logIn}
				value={[phoneNumber, pass]}
				innerText="Войти"
			/>
		</div>
	);
}

export default LogInForm;

import Input from "../../../shared/Input";
import AcceptButton from "../shared/AcceptButton";
import { useState, useContext } from "react";

import { Context } from "../../../store/Context";

function RegForm({ phoneNumber, setPhoneNumber }) {
	const { user } = useContext(Context);

	const [isTaken, setIsTaken] = useState(false);
	const [isEqual, setIsEqual] = useState(true);

	const [firstName, setFirstName] = useState("");
	const [familyName, setFamilyName] = useState("");
	const [password, setPassword] = useState("");
	const [passChecker, setPassChecker] = useState("");

	async function Registrator({ phoneNumber, firstName, familyName, password }) {
		(!isTaken || isEqual) &&
			(await user.register(phoneNumber, firstName, familyName, password));
	}

	return (
		<div className="modal">
			<Input
				placeholder={"номер телефона"}
				type={"text"}
				value={phoneNumber}
				onChange={setPhoneNumber}
			/>
			{isTaken ? <p>Номер уже занят</p> : null}

			<Input
				placeholder={"Имя"}
				type={"text"}
				value={firstName}
				onChange={setFirstName}
			/>
			<Input
				placeholder={"Фамилия"}
				type={"text"}
				value={familyName}
				onChange={setFamilyName}
			/>
			<Input
				placeholder={"Пароль"}
				type={"password"}
				value={password}
				onChange={setPassword}
			/>
			<Input
				placeholder={"Повторите пароль"}
				type={"password"}
				value={passChecker}
				onChange={setPassChecker}
				sideEffect={(value) => {
					setIsEqual(value === password);
				}}
			/>
			{!isEqual && <p>Пароль не совпадает</p>}
			<AcceptButton
				clickEvent={Registrator}
				value={{
					phoneNumber,
					firstName,
					familyName,
					password,
				}}
				innerText={"Зарегестрировасться"}
				preEffect={async () => setIsTaken(await user.isExist(phoneNumber))}
				buttonClassName="hollow-button"
			/>
		</div>
	);
}

export default RegForm;

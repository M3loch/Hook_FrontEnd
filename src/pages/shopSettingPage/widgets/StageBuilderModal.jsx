import { useContext, useState } from "react";
import { Context } from "../../../store/Context";
import CheckBox from "../../../shared/CheckBox";
import Button from "../../../shared/Button";
import Input from "../../../shared/Input";

function StageBuilderModal({ setStagebuilderModal, stageList, setStageList }) {
	const { shop, user } = useContext(Context);

	const roles = [];

	for (const role in shop.roles.data) {
		roles.push(shop.roles.data[role]);
	}

	const [step, setStep] = useState(0);
	const [stageName, setStageName] = useState("");
	const [stageDuration, setStageDuration] = useState(0);
	const [visibleTo, setVisibleTo] = useState([]);
	const [editPermission, setEditPermission] = useState([]);

	function nextStep() {
		setStep((prev) => prev + 1);
	}
	function prevStep() {
		setStep((prev) => prev - 1);
	}

	async function createNewStage() {
		const newStageList = stageList;

		newStageList.push({
			stage_name: stageName,
			duration: Number(stageDuration),
			visible_to: visibleTo,
			edit_permission: editPermission,
		});

		const newShopInfo = await shop.updateShop(user.accessToken, {
			stages: newStageList,
		});

		setStageList(newShopInfo.stages.data);
	}

	function MultiStepModal() {
		switch (step) {
			case 0:
				return (
					<>
						<p className="master-setting-name">
							Введите название новой стадии:
						</p>
						<Input
							placeholder={"Название стадии"}
							onChange={setStageName}
							value={stageName}
						/>
						<Button innerText={"Далее"} clickEvent={nextStep} />
					</>
				);
			case 1:
				return (
					<>
						<p className="master-setting-name">
							Введите длительность новой стадии в минутах:
						</p>
						<Input
							placeholder={"Длительность роли"}
							onChange={setStageDuration}
							value={stageDuration}
							type={"number"}
						/>
						<Button innerText={"Далее"} clickEvent={nextStep} />
						<Button
							innerText={"Назад"}
							className={"hollow-button"}
							clickEvent={prevStep}
						/>
					</>
				);
			case 2:
				return (
					<>
						<p className="master-setting-name">
							Кому доступен просмотр стадии:
						</p>

						{roles.map((role) => {
							return (
								<CheckBox
									key={role.role_name}
									label={role.role_name}
									onChange={() => {
										setVisibleTo((prev) => {
											if (prev.includes(role.role_name)) {
												return prev.filter((val) => {
													return val !== role.role_name;
												});
											} else {
												prev.push(role.role_name);
												return prev;
											}
										});
									}}
								/>
							);
						})}
						<Button innerText={"Далее"} clickEvent={nextStep} />
						<Button
							innerText={"Назад"}
							className={"hollow-button"}
							clickEvent={prevStep}
						/>
					</>
				);
			case 3:
				return (
					<>
						<p className="master-setting-name">
							Кому доступно изменение стадии:
						</p>

						{roles.map((role) => {
							return (
								<CheckBox
									key={role.role_name}
									label={role.role_name}
									onChange={() => {
										setEditPermission((prev) => {
											if (prev.includes(role.role_name)) {
												return prev.filter((val) => {
													return val !== role.role_name;
												});
											} else {
												prev.push(role.role_name);
												return prev;
											}
										});
									}}
								/>
							);
						})}
						<Button
							innerText={"Создать"}
							clickEvent={() => {
								createNewStage();
								setStagebuilderModal(false);
							}}
						/>
						<Button
							innerText={"Назад"}
							className={"hollow-button"}
							clickEvent={prevStep}
						/>
					</>
				);
		}
	}

	return (
		<div className="modal-bg">
			<div className="modal-master">
				{MultiStepModal()}
				<Button
					clickEvent={setStagebuilderModal}
					value={false}
					innerText={"Отмена"}
					className={"hollow-button"}
				/>
			</div>
		</div>
	);
}

export default StageBuilderModal;

import cross from "../../../assets/cross.svg";
import { useContext } from "react";
import { Context } from "../../../store/Context";
import Button from "../../../shared/Button";

function StageCard({ Stage, stageList, setStageList, index }) {
	const { shop, user } = useContext(Context);

	async function deleteStage() {
		const newList = [];
		for (let i = 0; i < stageList.length; i++) {
			i != index && newList.push(stageList[i]);
		}

		const newShopInfo = await shop.updateShop(user.accessToken, {
			stages: newList,
		});

		setStageList(newShopInfo.stages.data);
	}

	return (
		<div className="block-value">
			<div className="stage-table-column stage-index">{index}</div>
			<div className="stage-table-column">"{Stage.stage_name}"</div>
			<div className="stage-table-column">{Stage.duration} мин</div>
			<div className="stage-table-column">
				{Stage.visible_to.map((role) => {
					return <p key={crypto.randomUUID()}>{role}</p>;
				})}
			</div>
			<div className="stage-table-column">
				{Stage.edit_permission.map((role) => {
					return <p key={crypto.randomUUID()}>{role}</p>;
				})}
			</div>
			<Button
				innerText={<img src={cross} />}
				value={Stage.stageName}
				clickEvent={deleteStage}
				className={"cross"}
			/>
		</div>
	);
}

export default StageCard;

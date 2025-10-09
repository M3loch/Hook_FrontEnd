import { useContext } from "react";
import { Context } from "../../../store/Context";
import Button from "../../../shared/Button";

import cross from "../../../assets/cross.svg";

function RoleCard({ Role, setRoleList }) {
	const { shop, user } = useContext(Context);

	async function deleteRole() {
		const currentRoles = shop.roles.data;
		delete currentRoles[Role.role_name];
		const newShopInfo = await shop.updateShop(user.accessToken, {
			roles: currentRoles,
		});

		const roles = [];

		for (const role in newShopInfo.roles.data) {
			roles.push(newShopInfo.roles.data[role]);
		}

		setRoleList(roles);
	}

	return (
		<div className="block-value">
			<p>"{Role.role_name}"</p>
			<Button
				innerText={<img src={cross} />}
				value={Role.role_name}
				clickEvent={deleteRole}
				className={"cross"}
			/>
		</div>
	);
}

export default RoleCard;

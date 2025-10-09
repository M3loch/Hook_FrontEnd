import { useContext } from "react";
import { Context } from "../../../store/Context";
import Button from "../../../shared/Button";

import cross from "../../../assets/cross.svg";

function EmployeeCard({ employee, setEmployeeList }) {
	const { shop, user } = useContext(Context);

	async function deleteEmployee() {
		const currentEmployees = shop.employees.data;
		const filtredEmployeeList = currentEmployees.filter((emp) => {
			return emp.employee_id != employee.employee_id;
		});
		const request = {};
		for (const employee of filtredEmployeeList) {
			request[`${employee.employee_id}`] = employee.employee_role;
		}
		console.log(request);
		const newShopInfo = await shop.updateShop(user.accessToken, {
			employees: request,
		});

		setEmployeeList(newShopInfo.employees.data);
	}

	return (
		<div className="block-value">
			<div className="employee-table-column">{employee.employee_name}</div>
			<div className="employee-table-column">{employee.employee_role}</div>
			<Button
				innerText={<img src={cross} />}
				clickEvent={deleteEmployee}
				className={"cross"}
			/>
		</div>
	);
}

export default EmployeeCard;

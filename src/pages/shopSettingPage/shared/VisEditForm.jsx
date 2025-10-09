import CheckBox from "../../../shared/CheckBox";

function VisEditForm({ setting, vis, setVis, edit, setEdit }) {
	function SetEditTrue() {
		if (edit) {
			setEdit(false);
		} else {
			setEdit(true);
			setVis(true);
		}
	}
	return (
		<>
			<p className="master-setting-name">{setting}:</p>
			<CheckBox label={"Просмотр"} onChange={setVis} value={vis} />
			<CheckBox label={"Изменение"} onChange={SetEditTrue} value={edit} />

			<br />
		</>
	);
}

export default VisEditForm;

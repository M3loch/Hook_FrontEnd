import CheckBox from "../../../shared/CheckBox";

function VisEditForm({setting, vis, setVis, edit, setEdit}){

    function SetEditTrue(){
        if (edit){
            setEdit(false)
        } else {
            setEdit(true)
            setVis(true)
        }
    }
    return (
        <>
        {setting}:
        Просмотр:
            <CheckBox 
                onChange={setVis}
                value={vis}
            />
        Изменение:
            <CheckBox 
                onChange={SetEditTrue}
                value={edit}
            />
        
        <br/>
        </>
    )
}

export default VisEditForm
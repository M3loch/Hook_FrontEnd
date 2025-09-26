import Button from "../../../shared/Button"
import RoleBuilderModal from "./RoleBuilderModal"
import RoleCard from "./RoleCard"
import { useState } from "react"

function Roles({Roles}){

    const [roleBuilderModal, setRoleBuilderModal] = useState(false)

    const roles = []

    for (const role in Roles){
        roles.push(Roles[role])
    }
    const [roleList, setRoleList] = useState(roles)
    return(
        <>
            {roleBuilderModal && <RoleBuilderModal 
            roleList={roleList} setRoleList={setRoleList} 
            setRoleBuilderModal={setRoleBuilderModal}
            />}
            {roleList.map((role) => {return <RoleCard key={crypto.randomUUID()} Role={role}/>})}

            <Button 
                innerText={"Создать Роль"}
                clickEvent={setRoleBuilderModal}
                value={true}
            />
        </>
    )
}

export default Roles
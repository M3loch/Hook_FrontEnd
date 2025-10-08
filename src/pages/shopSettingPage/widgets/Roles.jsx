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
        <div className="block">
            {roleBuilderModal && <RoleBuilderModal 
            roleList={roleList} setRoleList={setRoleList} 
            setRoleBuilderModal={setRoleBuilderModal}
            />}
            <p className="block-setting-container">
                Роли:
            </p>
            <div className="block-values">
                {roleList.map((role) => {return (
                    <RoleCard 
                        key={role.role_name} 
                        Role={role}
                        setRoleList={setRoleList}
                    />

                )})}
            </div>

            <div className="block-controls">
                <Button 
                    innerText={"Создать Роль"}
                    clickEvent={setRoleBuilderModal}
                    value={true}
                />
            </div>

        </div>
    )
}

export default Roles
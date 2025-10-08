import Button from "../../../shared/Button"
import RoleBuilderModal from "./RoleBuilderModal"
import RoleCard from "./RoleCard"
import { useState } from "react"

import '../styles/roles.css'

function Roles({Roles}){

    const [roleBuilderModal, setRoleBuilderModal] = useState(false)

    const roles = []

    for (const role in Roles){
        roles.push(Roles[role])
    }
    const [roleList, setRoleList] = useState(roles)
    return(
        <div className="role-table">
            <div className="block">
                {roleBuilderModal && <RoleBuilderModal 
                roleList={roleList} setRoleList={setRoleList} 
                setRoleBuilderModal={setRoleBuilderModal}
                />}
                <div className="block-label role-block-label">
                    <p>
                        Роли:
                    </p>
                </div>
                <div className="block-values role-block-values">
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
        </div>
    )
}

export default Roles
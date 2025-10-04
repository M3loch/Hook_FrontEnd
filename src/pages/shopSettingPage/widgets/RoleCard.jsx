import { useContext } from "react"
import { Context } from "../../../App"
import Button from "../../../shared/Button"

function RoleCard({Role, setRoleList}){
    const {shop, user} = useContext(Context)

    async function deleteRole(){
        const currentRoles = shop.roles.data
        delete currentRoles[Role.role_name]
        const newShopInfo = await shop.updateShop(user.accessToken, {roles: currentRoles})

        const roles = []

        for (const role in newShopInfo.roles.data){
            roles.push(newShopInfo.roles.data[role])
        }

        setRoleList(roles)
    }

    return (
        <div> 
            {Role.role_name}
            <Button 
                innerText={"X"}
                value={Role.role_name}
                clickEvent={deleteRole}
            />
        </div>
    )
}

export default RoleCard
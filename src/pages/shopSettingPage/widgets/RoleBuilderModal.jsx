import { useContext, useState } from "react"
import {Context} from "../../../App"
import roleBuilder from "../../../entities/role"
import Input from "../../../shared/Input"
import Button from "../../../shared/Button"
import CheckBox from "../../../shared/CheckBox"
import VisEditForm from "../shared/VisEditForm"
const newRole = new roleBuilder
function RoleBuilderModal({setRoleList, setRoleBuilderModal}){

    const {shop, user} = useContext(Context)

    async function CreateNewRole(){
        newRole.isActive = true
        const currentRoles = shop.roles.data
        const newRoleModel = newRole.modelDump()
        currentRoles[newRoleModel.role_name] = newRoleModel
        const newShopInfo = await shop.updateShop(user.accessToken, {roles : currentRoles})
        const roles = []

        for (const role in newShopInfo.roles.data){
            roles.push(newShopInfo.roles.data[role])
        }   
        setRoleList(roles)

        setRoleBuilderModal(false)
    }


    const [step, setStep] = useState(0)
    function nextStep(){
        setStep(prev => prev+1)
    }

    const [roleName, setRoleName] = useState('')

    const [ordersPage, setOrderPage] = useState(false)
    const [settingPage, setSettingPage] = useState(false)
    
    const [rolesVis, setRolesVis] = useState(false)
    const [rolesEdit, setRolesEdit] = useState(false)
    const [shopNameEdit, setShopNameEdit] = useState(false)
    const [stagesVis, setStagesVis] = useState(false)
    const [stagesEdit, setStagesEdit] = useState(false)
    const [discountVis, setDiscountVis] = useState(false)
    const [discountEdit, setDiscountEdit] = useState(false)
    const [tablesVis, setTablesVis] = useState(false)
    const [tablesEdit, setTableEdit] = useState(false)
    const [categoryVis, setCategoryVis] = useState(false)
    const [categoryEdit, setCategoryEdit] = useState(false)
    const [employyesVis, setEmployeesVis] = useState(false)
    const [employyesEdit, setEmployeesEdit] = useState(false)
    
    const [visBypass, setVisBypass] = useState(false)
    const [editBypass, setEditBypass] = useState(false)

    function MultiStepModal(){
        switch(step){
            case 0:
                return (
                    <>
                        Введите название новой роли:
                        <Input 
                            placeholder={"Название роли"}
                            onChange={setRoleName}
                            value={roleName}
                            max={15}
                        />
                        <Button 
                            innerText={"Сохранить"}
                            clickEvent={(roleName)=>{
                                newRole.roleName = roleName; 
                                nextStep()
                            }}
                            value={roleName}
                        />
                    </>
                );
            case 1: 
                return(
                    <>
                        Выберите доступные для просмотра страницы:
                        Заказы : 
                        <CheckBox 
                            onChange={setOrderPage}
                            value={ordersPage}
                        />
                        Настройки : 
                        <CheckBox 
                            onChange={setSettingPage}
                            value={settingPage}
                        />
                        
                        <Button 
                            innerText={"Далее"}
                            clickEvent={()=>{
                                newRole.orderPageVisibility = ordersPage
                                newRole.settingPageVisibility = settingPage
                                nextStep()
                            }}
                        />
                    </>
                )
            case 2:
                return(
                    <>
                        Выберите доступные для просмотра и изменения  настройки:<br/>

                        Название Заведения: 
                            Изменение: 
                                <CheckBox 
                                    onChange={setShopNameEdit}
                                    value={shopNameEdit} 
                                />
                        <br/>

                        <VisEditForm 
                            setting={"Роли"}
                            vis={rolesVis}
                            edit={rolesEdit}
                            setEdit={setRolesEdit}
                            setVis={setRolesVis}
                        />

                        <VisEditForm 
                            setting={"Стадии"}
                            vis={stagesVis}
                            edit={stagesEdit}
                            setVis={setStagesVis}
                            setEdit={setStagesEdit}
                        />

                        <VisEditForm 
                            setting={"Акции"}
                            vis={discountVis}
                            edit={discountEdit}
                            setVis={setDiscountVis}
                            setEdit={setDiscountEdit}
                        />

                        <VisEditForm 
                            setting={"Столы"}
                            vis={tablesVis}
                            edit={tablesEdit}
                            setVis={setTablesVis}
                            setEdit={setTableEdit}
                        />
                        
                        <VisEditForm 
                            setting={"Категории"}
                            vis={categoryVis}
                            edit={categoryEdit}
                            setVis={setCategoryVis}
                            setEdit={setCategoryEdit}
                        />
                        
                        <VisEditForm 
                            setting={"Сотрудники"}
                            vis={employyesVis}
                            edit={employyesEdit}
                            setVis={setEmployeesVis}
                            setEdit={setEmployeesEdit}
                        />

                        <Button 
                            innerText={"Далее"}
                            clickEvent={()=>{
                                newRole.setSetting("shopName", true, shopNameEdit)
                                newRole.setSetting("roles", rolesVis, rolesEdit)
                                newRole.setSetting("stages", stagesVis, stagesEdit)
                                newRole.setSetting("discounts", discountVis, discountEdit)
                                newRole.setSetting("tables", tablesVis, tablesEdit)
                                newRole.setSetting("categories", categoryVis, categoryEdit)
                                newRole.setSetting("employees", employyesVis, employyesEdit)
                                nextStep()

                            }}
                        />
                    </>
                )
            case 3:
                return(
                    <>
                        Разрешить просмотр и изменение всех стадий заказа
                        <VisEditForm 
                            setting={"Разрешить?"}
                            vis={visBypass}
                            edit={editBypass}
                            setVis={setVisBypass}
                            setEdit={setEditBypass}
                        />
                        <Button 
                            innerText={"Сохранить"}
                            clickEvent={() => {
                                newRole.setOrderBypass(visBypass,  editBypass)
                                CreateNewRole()
                            }}
                        />
                    </>
                )
            default: null
            

        }
    }
    return (
        <>
            {MultiStepModal()}
        </>
    )    
}

export default RoleBuilderModal
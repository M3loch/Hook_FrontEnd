import { useContext, useState } from "react"
import { Context } from "../../App"
import Field from "../../shared/Field"
import Block from "./widgets/Block"
import Roles from "./widgets/Roles"
import Stages from "./widgets/Stages"

import './styles/CategoriesDiscountsTables.css'
import './styles/shopNameTable.css'

function ShopSettingPage(){
    const {shop} = useContext(Context)

    const [shopName , setShopName] = useState(shop.shopName.data)

    return (
        <div className="shop-settings-container">
            <div className="shop-name-table">
                <div className="setting-container" >
                    <p style={{width: '50%'}}>Название заведения:</p>
                {
                    shop.shopName && shop.shopName["editable"]
                    ? <Field 
                        value={shopName}
                        setValue={setShopName}
                        placeholder={"Название заведения"}
                        innerText={"Сохранить"}
                        callBack={()=>{alert("update")}}
                    />
                    : shop.shopName.data
                }
                </div>
            </div>
            {
                shop.tables && shop.tables.editable
                ? 
                <Block 
                list={shop.tables.data}
                itemName={"Стол"}
                settingName={"tables"}
                category={"Столы"}
                className={"tables"}
                />
                : null
            }
            {
                shop.discounts && shop.discounts.editable
                ? 
                <Block 
                list={shop.discounts.data}
                itemName={"Акция"}
                settingName={"discounts"}
                category={"Акции"}
                className={"discounts"}
                />
                : null
            }
            {
                shop.categories && shop.categories.editable
                ? 
                <Block 
                list={shop.categories.data}
                            itemName={"Категория"}
                            settingName={"categories"}
                            category={"Категории"}
                            className={"categories"}
                        />
                    : null
            }
            {
                shop.roles && shop.roles.editable
                    ? 
                        <Roles Roles={shop.roles.data}/>
                    : 
                        null
            }
            {
                shop.stages && shop.stages.editable
                    ?   <Stages 
                            Stages={shop.stages.data}
                        />
                    :
                        null
            }
        </div>
    )
}

export default ShopSettingPage
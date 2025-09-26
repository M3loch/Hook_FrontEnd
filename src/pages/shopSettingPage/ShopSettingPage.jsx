import { useContext, useState } from "react"
import { Context } from "../../App"
import Field from "../../shared/Field"
import Block from "./widgets/Block"

function ShopSettingPage(){
    const {shop} = useContext(Context)

    const [shopName , setShopName] = useState(shop.shopName.data)

    return (
        <>
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
            {
            shop.tables && shop.tables.editable
                ? 
                    <Block 
                        list={shop.tables.data}
                        itemName={"Стол"}
                        settingName={"tables"}
                        category={"Столы"}
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
                    />
                : null
            }
        </>
    )
}

export default ShopSettingPage
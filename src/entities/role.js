class roleBuilder{

    
    constructor(){
        this._roleName = undefined
        this._isActive = undefined
        this._shopName = undefined
        this._roles = undefined
        this._stages = undefined
        this._discounts = undefined
        this._tables = undefined
        this._categories = undefined
        this._employees = undefined
        this._pages = undefined
        this._orderBypass = undefined
        // const settings = ["shopName", "roles", "stages", "discounts", "tables", "categories", "employees" ]

        // for (let setting of settings){
        //     this.setSetting(setting, false, false)
        // }

        // this._orderBypass = {vis: false, edit: false}

        // this._isActive = false

        this._pages = {orders: false, shop_settings: false}
    }

    setOrderBypass(vis, edit){
        this._orderBypass = {vis: vis, edit: edit}
    }

    
    setSetting(setting, vis, edit){
        this[`_${setting}`] = {vis: vis, edit: edit}
    }
    
    set orderPageVisibility(bool){
        this._pages.orders = bool
    }

    set settingPageVisibility(bool){
        this._pages.shop_settings = bool
    }
    
    set roleName(name){
        this._roleName = name
        console.log(this._roleName)
    }

    set isActive(bool){
        this._isActive = bool
    }

    modelDump(){
        return {
            role_name: this._roleName,
            is_active: this._isActive,
            permissions: {
                settings: {
                    shop_name: this._shopName,
                    roles: this._roles,
                    stages: this._stages,
                    discounts: this._discounts,
                    tables: this._tables,
                    categories: this._categories,
                    employees: this._employees,
                },
                pages: this._pages
            },
            order_bypass: this._orderBypass
        }
    }
    modelRestore({role_name, is_active, permissions, order_bypass}){
        this._roleName = role_name

        this._isActive = is_active

        this._orderBypass = order_bypass

        this._shopName = permissions.settings.shop_name
        this._roles = permissions.settings.roles
        this._stages = permissions.settings.stages
        this._discounts = permissions.settings.discounts
        this._tables = permissions.settings.tables
        this._categories = permissions.settings.categories
        this._employees = permissions.settings.employees
    }


}

export default roleBuilder
import { useState } from "react"
import Button from "./Button"
import CheckBox from "./CheckBox"


function CheckboxField({
    value, 
    setValue, 
    callBack, 
    innerText, 
    }){
    
    const [editMode, setEditMode] = useState(false)

    function wrapper(){
        callBack()
        setEditMode(false)
    }


    return (
        <div className="field">
            {
                editMode
                    ?
                        <>
                            <CheckBox
                                onChange={setValue}
                                value={value}
                            />
                            <Button 
                                innerText={innerText}
                                clickEvent={wrapper}
                            />
                            <Button 
                                innerText={"Отмена"}
                                className={'hollow-button'}
                                clickEvent={()=> setEditMode(false)}
                            />
                        </>
                    :
                        <div
                            className="value-container"  
                            onClick={()=> setEditMode(true)}>
                            <p>{value ? 'Да' : 'Нет'}</p>
                        </div>
            }
        </div>
    )
}

export default CheckboxField
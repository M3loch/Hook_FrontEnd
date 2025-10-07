import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
import Textarea from "./TextArea"

import './styles/field.css'


function Field({value, setValue, callBack, placeholder, innerText, max = null, min = null, type = 'text', textArea = false}) {
    
    const [editMode, setEditMode] = useState(false)
    
    const [initialValue, setinitialValue] = useState(value)

    function wrapper(){
        callBack()
        setEditMode(false)
        setinitialValue(value)
    }


    return (
        <div className="field">
            {
                editMode
                    ?
                        <>
                        {textArea
                            ?
                                <Textarea 
                                    placeholder={placeholder}
                                    value={value}
                                    onChange={setValue}
                                    max={max}
                                    min={min}
                                    type={type}
                                />
                            :
                                <Input 
                                    placeholder={placeholder}
                                    value={value}
                                    onChange={setValue}
                                    max={max}
                                    min={min}
                                    type={type}
                                />
                        }
                            <Button 
                                innerText={innerText}
                                clickEvent={wrapper}
                            />
                            <Button 
                                innerText={"Отмена"}
                                className={'hollow-button'}
                                clickEvent={()=> {
                                    setValue(initialValue)
                                    setEditMode(false)
                                }
                                }
                            />
                        </>
                    :
                        <div 
                            className="value-container" 
                            onClick={()=> setEditMode(true)}
                        >
                            <p>{value}</p>
                        </div>
            }
        </div>
    )
}

export default Field
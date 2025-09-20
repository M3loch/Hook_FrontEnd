function Button({clickEvent, value, innerText}){

    function callBack(){
        clickEvent(value)
    }

    return <button onClick={callBack} >{innerText}</button>
}

export default Button
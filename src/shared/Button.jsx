function Button({clickEvent, value, innerText, className }){

    function callBack(){
        clickEvent(value)
    }

    return <button className={className} onClick={callBack} >{innerText}</button>
}

export default Button

function ActionButton( {clickEvent, value=undefined, innerText, buttonClassName=''} ) {

    function handler(){
        clickEvent(value)
    }

    return <button onClick={handler} className={buttonClassName}>{innerText}</button>
}
export default ActionButton
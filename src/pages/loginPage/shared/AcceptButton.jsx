function AcceptButton({clickEvent, value, innerText, buttonClassName='', preEffect}) {

    function acceptEvent(event) {
        preEffect && preEffect()
        clickEvent(value)
    }

    return (
        <button onClick={acceptEvent} className={buttonClassName}>
            {innerText}
        </button>
    )

}

export default AcceptButton
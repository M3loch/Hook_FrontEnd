function Input({placeholder, onChange, value, type, sideEffect = null}) {

    function changeEvent(event) {
        onChange(event.target.value)
        sideEffect && sideEffect()
    }

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={changeEvent} />
    )
}

export default Input
function Input({
    placeholder,
    onChange, 
    value, 
    type = 'text',
    sideEffect = null, 
    max = null, 
    }) {

    function maxCallback(){
        alert(`Максимальное значение - ${max}`)
        onChange(max)
    }

    function changeEvent(event) {
        onChange(event.target.value)

        max !== null
            ? 
                (type == 'number' && event.target.value > max) && maxCallback
                (type == 'text' && event.target.valu.length > max) && maxCallback
            : null
            
        sideEffect && sideEffect()
    }

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={changeEvent} />
    )
}

export default Input
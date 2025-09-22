function Select(
    { 
        selectorName, 
        options, 
        setOption,
        byIndex = false
     }){
    function selectHandler(event){
        !byIndex
        ?
            setOption(event.target.value)
        :      
            setOption(Number(event.target.value))      
    }
    return (
        <>
            <select onChange={selectHandler} defaultValue={selectorName}>
                <option disabled>{selectorName}</option>
                {options.map((value, index) => { return <option key={index} value={!byIndex ? value : index}>{value}</option>})}
            </select>
        </>
    )
}

export default Select
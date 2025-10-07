function TimeOver({value, isPositive, stage}){

    return(
        <div className="time-over">
            {
                isPositive
                    ? 
                        <>
                            <p style={{width: '120px', marginLeft: '-0.5em'}} className="negative">{value}</p>
                            <p  style={{marginLeft: '0.5em'}} className="negative">:</p>
                            <p style={{width: '120px', textAlign: 'right'}} className="negative">{stage}</p>
                        </> 
                    :
                        <>
                            <p style={{width: '120px'}} className="positive">{value}</p>
                            <p  className="positive">:</p>
                            <p style={{width: '120px', textAlign: 'right'}} className="positive">{stage}</p>
                        </> 
            }

        </div>
    )
}

export default TimeOver
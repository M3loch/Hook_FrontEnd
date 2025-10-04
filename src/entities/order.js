
import { Converter } from "../lib/converter"

class OrderEntity {

    constructor(
        {
        order_id,
        start_time,
        time_overs = [],
        table_id,
        discount_id,
        category_id,
        is_paid,
        strength,
        stage_index,
        comment
        },
        {stages}
    ){
        this._orderID = order_id;
        this._startTime = start_time;
        this._timeOvers = time_overs
        this._timeOversSum = time_overs.reduce((sum, current) => { return sum + current }, 0)
        this._table_id = table_id
        this._discount_id = discount_id
        this._category_id = category_id
        this._is_paid = is_paid
        this._strength = strength
        this._stage_index = stage_index
        this._comment = comment
        this._stages = stages.data
        this.stagesSum = 0
        for (let i = 0; i <= this._stage_index; i++) {
            this.stagesSum += this._stages[i].duration*60000
        }
        this._timeInterface = Converter.remainingTime(
            this._startTime + this.stagesSum + this._timeOversSum -  Date.now()
        )
    }

    

    makeStep(){
        
        let stagesSum = 0
        for (let i = 0; i <= this._stage_index; i++) {
            stagesSum += this._stages[i].duration
        }
        this._timeInterface = Converter.remainingTime(
            this._startTime + this.stagesSum + this._timeOversSum -  Date.now()
        )
        return this
    }

    get orderID(){
        return this._orderID
    }
    get timeInterface(){
        return this._timeInterface
    }
}

export default OrderEntity
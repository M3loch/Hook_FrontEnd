
import cross from '../../../assets/cross.svg'
import { useContext } from "react"
import { Context } from "../../../App"
import Button from '../../../shared/Button'

function StageCard({Stage, stageList, setStageList, index}){
    
    const {shop, user} = useContext(Context)

    async function deleteStage(){

        const newList = []
        for (let i = 0; i < stageList.length; i++){
            i != index && newList.push(stageList[i])
        }
        
        const newShopInfo = await shop.updateShop(user.accessToken, {stages: newList})

        setStageList(newShopInfo.stages.data)
    }


    return (
        <div className="block-value">
            <p>
                Название стадии: "{Stage.stage_name}"
            </p>
            <p>
                Длительность: {Stage.duration} мин
            </p>
            <p>
                Доступен к просмотру: {Stage.visible_to.map((role)=>{
                    return role
                })}
            </p>
            <p>
                Доступен к изменению: {Stage.edit_permission.map((role)=>{
                    return role
                })}
            </p>
            <Button 
                innerText={<img src={cross} />}
                value={Stage.stageName}
                clickEvent={deleteStage}
                className={'cross'}
            />
        </div>
    )
}

export default StageCard
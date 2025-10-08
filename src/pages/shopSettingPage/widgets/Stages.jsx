import { useState } from "react"
import StageCard from "./StagesCard"
import StageBuilderModal from "./StageBuilderModal"
import Button from "../../../shared/Button"

import '../styles/stages.css'

function Stages({Stages}){

    const [stageBuilderModal, setStagebuilderModal] = useState(false)
    const [stageList, setStageList] = useState(Stages)

    return (
        
        <div className="stages-setting-table">
        <div className="table-header-grey"> Стадии</div>
        <div className="block">
            {
                stageBuilderModal && 
                <StageBuilderModal
                    setStagebuilderModal={setStagebuilderModal}
                    stageList={stageList}
                    setStageList={setStageList}
                />
            }
            
            <div className="block-values">
                {
                    stageList.map((stage, index)=>{
                        return(
                            <StageCard 
                                stageList={stageList}
                                key={index}
                                index={index}
                                Stage={stage}
                                setStageList={setStageList}
                            />
                        ) 
                    })
                }
            </div>
            <div className="block-controls">
                <Button 
                    innerText={"Создать Стадию"}
                    clickEvent={setStagebuilderModal}
                    value={true}
                />
            </div>
        </div>
        </div>
    )
}

export default Stages
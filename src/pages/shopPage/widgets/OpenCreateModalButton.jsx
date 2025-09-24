import Button from "../../../shared/Button"


function OpenCreateModalButton({setCreateOrderModal}){

    function OpenModal(){
        setCreateOrderModal(true)
    }
    return (
        <Button 
            innerText={'Создать заказ'} 
            clickEvent={OpenModal}
        />

    )
}

export default OpenCreateModalButton
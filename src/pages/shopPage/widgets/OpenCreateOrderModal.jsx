

function OpenCreateOrderModal({setCreateModal}){

    function openModal(){
        setCreateModal(true)
    }

    return(
        <button onClick={openModal}>
            <span>+</span><br />
            Создать заказ
        </button>
    )
}
export default OpenCreateOrderModal
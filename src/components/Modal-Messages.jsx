import { useEffect, useState } from "react";
import "../styles/modal.css"

function ModalMessages({type, visible}) {
    console.log("Modal Called");
    const [modalVisible, setModalVisible] = useState(visible);
    const closeModal = () => {
        setModalVisible(false);
    };

    const renderContent = () => {
        switch(type) {
            case "alert-newsletter":
                return(
                    <>
                        <p>Te has suscrito a la Newsletter!</p>
                        <button onClick={closeModal()}>Cerrar</button>
                    </>
                );
            case "already-registered":
                return(
                    <>
                        <p>¡Ya estabas suscrito!</p>
                        <button onClick={closeModal()}>Cerrar</button>
                    </>
                )
            default:
                return(
                    <>
                        <p>:D</p>
                        <button onClick={closeModal()}>Cerrar</button>
                    </>
                )
        }
    };

    return (
        <>
            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        {renderContent()}
                    </div>
                </div>
            )}
        </>
    );
}

export default ModalMessages
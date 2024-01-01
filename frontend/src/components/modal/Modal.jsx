import React from 'react'
import "./style.css"

function Modal({ dataModal, dataDelete, dataId }) {
    const modalDelete = () => {
        dataDelete(dataId);
        dataModal();
    }
    return (
        <div className="modalContainer">
            <div className="modalBox">
                <div className="modalHeading">Confirmation</div>
                <div className="modalText">Are you Sure to DELETE this item?</div>
                <div className="modalButtons">
                    <div className="masterHeaderBox2Sec2 modalButton1 " onClick={dataModal}>Cancel</div>
                    <div className="masterHeaderBox2Sec2 modalButton2 " onClick={modalDelete}>Delete</div>
                </div>
            </div>
        </div>
    )
}

export default Modal
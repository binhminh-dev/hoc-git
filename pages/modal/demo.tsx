/* eslint-disable react/display-name */
import React, { useState } from "react";
import Modal from "../../components/ModalSolution";


// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="container">
            <Modal
                onOk={() => {
                   console.log("Ok");
                }}
                onCancel={() => {
                   console.log("Cancel")
                   setOpenModal(false);
                }}
                // title="Form login"
                isRenderHeader={true}
                inVisible={openModal}
                isRenderCloseIcon={true}
                btnOkText="Ok"
                btnCancelText="Cancel"
                //renderFooter={() => {
                //    return (
                //        <button onClick={() => {
                //            console.log("Call API login len server toi dang doi");
                //        }}>Ok</button>
                //    )
                //}}
            >
                <h2>Demo Modal</h2>
                <form>
                    <input type="test" />
                </form>
            </Modal>

            <button 
                onClick={() => {
                    setOpenModal(true);
            }}>Open Modal</button>
        </div>
    )
}
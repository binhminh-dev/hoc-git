import React, { useState } from "react"
import ModalText from "../../components/ModalSolution/";

const Solution = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="container">
        {
            openModal &&
            <ModalText
            //    inVisible={openModal}
            //    onCancel={() => {
            //        setOpenModal(false)
            //    }}
            //    onOk={() => {
            //        console.log("Submit Form");
            //    }}
            //    btnOkText="Submit"
            //   btnCancelText="Huy bo"
            >
                <h2>Demo Modal</h2>
                <form>
                    <input type="text" />
                </form>
            </ModalText>
}
            <button 
                onClick={() => {
                    console.log("setOpenModal")
                    setOpenModal(true);
                }}>Open Modal</button>
        </div>
        
    )
}

export default Solution;

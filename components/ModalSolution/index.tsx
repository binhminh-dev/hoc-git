import React, { useEffect, useState } from "react";
import "./modal.scss";
 
type ModalProps = {
    inVisible?: boolean;
    isRenderHeader?: boolean;
    isRenderCloseIcon?: boolean;
    btnOkText?: string;
    btnCancelText?: string;
    onOk?: () => void;
    onCancel?: () => void;
    renderFooter?: () => JSX.Element;
}

const CLASS_DEFAULT = "tcl-modal__wrapper";

const ModalSolution: React.FC<ModalProps> = ({ 
    inVisible: isVisibleOutSide,
    children,
    onOk , 
    onCancel, 
    renderFooter, 
    isRenderHeader , 
    isRenderCloseIcon, 
    btnCancelText, 
    btnOkText,
}) => {
    const [className, setClassName ] = useState(CLASS_DEFAULT);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        function handler(evt) {
            if(evt.which === 27)
            onCancel();
        }
        document.addEventListener("keyup", handler);
        return () => {
            document.addEventListener("keyup", handler);
        }
    }, [onCancel])
        
    useEffect(() => {
        console.log("isVisibleOutside")
        setIsVisible(isVisibleOutSide)
    }, [isVisibleOutSide])

    const _onCancel = (): void => {
        if(onCancel) {
            (onCancel);
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        if(isVisible === true) {
            setClassName((oldClass) => oldClass + " show");
            document.querySelector("body").classList.add("tcl-modal__open");
        } else {
            setClassName(CLASS_DEFAULT);
            document.querySelector("body").classList.remove("tcl-modal__open");
        }
    }, [ isVisible ])

    const _renderFooter = (): JSX.Element => {
        if(renderFooter) {
            return renderFooter();
        }

        return (
            <>
               <button className="tcl-modal__cancel" onClick={onCancel}>{btnCancelText}</button>
               <button className="tcl-modal__ok" onClick={onOk}>{btnOkText}</button>
            </>
        )
    }
    console.log("isRenderHeader", isRenderHeader);
    if(isVisible === false) return null;
    return (
        <div className={className}>
            <div className="tcl-mask" onClick={onCancel}> </div>
            <div className="tcl-dialog">
                <div className="tcl-modal__content">
                    {
                        isRenderHeader &&
                    <div className="tcl-modal__header">
                       Title demo 
                    {
                        isRenderCloseIcon &&
                       <button onClick={onCancel} className="tcl-modal__close"></button>
                    }
                    </div>
                    }
                    <div className="tcl-modal__body">
                        { children }
                    </div>
                    
                    <div className="tcl-modal__footer">
                        { _renderFooter() }
                    </div>
                </div>
            </div>
        </div>
    )
}

ModalSolution.defaultProps = {
    inVisible: false,
    btnCancelText: "Cancel",
    btnOkText: "Ok",
    isRenderHeader: true,
    isRenderCloseIcon: true,
}
export default ModalSolution;
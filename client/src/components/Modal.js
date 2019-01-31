import React from 'react';
import ReactDOM from 'react-dom';


//suzdali sme <div id="modal"> v index.html
//ako se klikne na nai-vunshnia div (sivia bg)
//se otiva na spisuka s vsichki streams:

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
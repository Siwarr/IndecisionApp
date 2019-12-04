import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentlabel="Selected Option"
    ariaHideApp={false}
    closeTimeoutMS={400}
    className="modal"
    >
        <h3 className="modal__title">You should definately...</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Thanks for that idea!</button>
    </Modal>
);

export default OptionModal;
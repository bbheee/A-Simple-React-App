import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">selected options</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button className="modal_body" onClick={props.handleClearSelectedOption}>
      OK
    </button>
  </Modal>
);

export default OptionModal;

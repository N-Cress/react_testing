import './Modal.css'

function Modal({confirm, modalOnOff}) {
    
    return  (
        <>
        
  <div className="modal">
        <p className="modal__title">{confirm}</p>
            <div className="modal__buttons">
      <button className="btn btn__cancel" onClick={modalOnOff}>Cancel</button>
      <button className="btn" onClick={1} >Confirm</button>
        </div>
        </div>
    <div className="backdrop" > </div>
</>
    )
}

export default Modal;
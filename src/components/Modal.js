import React from 'react';
import Form from './Form';

import MyContext from '../context/context';




function Modal () {

    const modalContext = React.useContext(MyContext)

    return (
        <div>
            <div className="modal" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={(e)=>{
                if (e.target === e.currentTarget) {
                    modalContext.setShowModal(!modalContext.showModal)
                }
            }}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                    <button type="button" className={`btn btn-outline-success ${modalContext.modeSignUp ? '' : 'active'} mr-2`} onClick={()=>{modalContext.setModeSignUp(false)}}>Sign In</button>
                    <button type="button" className={`btn btn-outline-success ${modalContext.modeSignUp ? 'active' : ''}`} onClick={()=>{modalContext.setModeSignUp(true)}}>Sign Up</button>
                    <button type="button" className="close" aria-label="Close" onClick={(e)=>{modalContext.setShowModal(!modalContext.showModal)}}>
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <Form></Form>
                </div>
                </div>
            </div>
            </div>
      </div>
    )
}

export default Modal;
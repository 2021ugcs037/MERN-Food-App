import React from 'react';
import ReactDom from 'react-dom';

// const  MODAL_STYLES = {
//     postion: 'fixed',
//     top: '60%',
//     left:'50%',
//     backgroundColor: 'aqua',
//     transform: 'translate(10%, 10%)',
//     zIndex: 10000,
//     height: "60%",
//     width: '70%'

// }

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.6)',
    zIndex: 1000
}

export default function Modal ({children , onClose}){
    return ReactDom.createPortal(
        <>
            {/* <div style={OVERLAY_STYLES}></div> */}
            
            <div className="MODAL_STYLES">
                <button className='btn bg-danger fs-4' style={{marginLeft: "90%", marginTop: "-35px"}} onClick={onClose}>X</button>
                {children}
            </div>

        </>,document.getElementById('cart-root')
    )
}
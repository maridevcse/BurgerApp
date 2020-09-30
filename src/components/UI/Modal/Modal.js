import React from 'react';
import style from './Modal.module.css';


const Modal =props=>{
      
    return(
       <div className={style.Modal} style={{display:props.show ? 'block': 'none'  }}>
          {props.children}
       </div>
    )
     
}

export default Modal;
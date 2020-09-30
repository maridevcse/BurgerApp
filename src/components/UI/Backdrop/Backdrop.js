import React from 'react';
import style from './Backdrop.module.css'

const Backdrop = props=>(
   
     <div onClick={props.click} className={style.Backdrop}>
       
     </div>
 );

 export default Backdrop;

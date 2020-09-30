import React from 'react';
import style from './Button.module.css';

const Button = props =>{

     let ClassLIst=[style.Button,style[props.type]].join(' ');

   return(

       
    <button className={ClassLIst} onClick={props.click}>
        {props.children}
    </button>



   )




}

export default Button;
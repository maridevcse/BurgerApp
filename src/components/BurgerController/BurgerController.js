import React from 'react';
import style from './BurgerController.module.css'

const BurgerController=props=>{
    return(

    <div className={style.BurgerController}>

           
        <p className={style.Label}>{props.label}</p>

        <button onClick={()=>props.MoreClick(props.type)} 
        className={style.More} 
        >+</button>

        <button onClick={()=>props.LessClick(props.type)} 
        className={style.Less} 
        disabled={props.CheckLength(props.type)}>-</button>
        
    </div>

    )
}

export default BurgerController;
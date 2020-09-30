import React from 'react'
import BurgerController from "../BurgerController";
import style from './BurgerControllers.module.css';
var uniqid =require('uniqid');

 
const Controllers=

[    
      {label:"Meat",type:"meat"},
      {label:"Bacon",type:"bacon"},
      {label:"Salad",type:"salad"},
      {label:"Jam",type:"jam"},
     
];





const BurgerControllers=props=>{


   const Buttons=Controllers.map((el,i)=>{

      return <BurgerController label={el.label} type={el.type} 
      MoreClick={props.MoreClick} LessClick={props.LessClick} 
      CheckLength={props.CheckLength} key={uniqid("Maari")} 
      
      />
    
     })

 

   return(
     
    <div className={style.BurgerControllers}>

    <p className={style.TotalCost}>Total Cost &nbsp;
    
    ${props.TotalCost.toFixed(2)}
    </p>

    {Buttons}

    <button className={style.OrderButton} disabled={props.TotalCost<=4} onClick={props.OrderBtnClicked}>ORDER NOW</button>
    </div>
      

   )



}


export default BurgerControllers;
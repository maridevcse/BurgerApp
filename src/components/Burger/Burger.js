import React from 'react';
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngredients';
import styles from './Burger.module.css';

const Burger=props=>{
 
   let transformedIngredients = Object.keys(props.ingredients)

   .map(el=>{
    
     return [...Array(props.ingredients[el])].map((ell,i)=>{
         
     return <BurgerIngredients key={el+i} type={el}/>
          
      })
    
   })
   .reduce((acc,ele)=>acc.concat(ele),[]);
   ;
 
  if(transformedIngredients.length<=0){
     transformedIngredients=(
        <p className={styles.ingredientCountNotification}>Please add ingredients</p>
     )
  }
    


return(


   <div className={styles.Burger}>
   <BurgerIngredients type={"bread-top"}/>
   {transformedIngredients}
   <div className={styles.Seeds2}></div>
   <BurgerIngredients type="bread-bottom"/>
   </div>



)





}


export default Burger;
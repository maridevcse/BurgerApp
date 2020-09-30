import React ,{Fragment} from 'react';
import uniqid from 'uniqid';
import Button from '../../UI/Button/Button';
import style from './OrderSummary.module.css'

const OrderSummary = props =>{

    
     
    const alla=()=>{
        alert("Order Continued");
     }
     
        const IngredientsList=Object.keys(props.Ingredients)
        .map(el=><li key={uniqid()}>{el}: {props.Ingredients[el]}</li>)

    
    return(


      <Fragment>

     
      <div className={style.OrderSummary}> 
         <p>Hey Your Order Summary is here</p>
         <p>Here Below the Ingredients in your Burger</p>

         <ul>
            {IngredientsList}
         </ul>

     <p><strong>Total Price : $ { props.Total}</strong></p>
          <p>Ready to checkout ?</p>
          <Button type="Success" click={alla}>continue</Button>
          <Button type="Danger" click={props.OrderBtnClicked}>cancel</Button>

     </div>

      </Fragment>
      
    )




}




export default OrderSummary;
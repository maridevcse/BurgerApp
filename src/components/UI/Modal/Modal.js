import React,{Fragment} from 'react';
import style from './Modal.module.css';
import uniqid from 'uniqid';
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';

const Modal =props=>{
     
    
     const alla=()=>{
        alert("Order Continued");
     }
        const IngredientsList=Object.keys(props.Ingredients)
        .map(el=><li key={uniqid()}>{el}:{props.Ingredients[el]}</li>)

    return(
      <Fragment>

      <Backdrop click={props.OrderBtnClicked}/> 
      <div className={style.Modal}> 
         <p>Hey Your Order Summary is here</p>
         <p>Few steps to complete the order</p>
         <ul>
            {IngredientsList}
         </ul>
     <p><strong>Total Price : $ { props.Total}</strong></p>
          <Button type="Success" click={alla}>continue</Button>
          <Button type="Danger" click={props.OrderBtnClicked}>cancel</Button>
     </div>

      </Fragment>
    )
}

export default Modal;
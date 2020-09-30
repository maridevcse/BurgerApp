import React ,{Component ,Fragment} from 'react';
import Burger from  '../../components/Burger/Burger';
import BurgerControllers from '../../components/BurgerController/BurgerControllers/BurgerControllers';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

class BurgerBuilder extends Component{

      constructor(props){
        super(props);
        this.state={

         ingredients:{
             meat:0,
             salad:0,
             bacon:0,
             jam:0,
         },

          totalCost:4,
          isOrderNowCliked:false
        }
      }
      
      INGREDIENTS_COST={
        meat:2,
        salad:2,
        bacon:2,
        jam:2,

      }


      MoreClick=key=>{

        const tempState=this.state.ingredients;
        tempState[key]=tempState[key]+1;
        this.setState({ingredients:tempState})
       
        this.TotalCostValidate();
   
      }

    LessClick=key=>{

        const tempState=this.state.ingredients;
        tempState[key]=tempState[key]-1;
        this.setState({ingredients:tempState})

        this.TotalCostValidate();
   
      }


    CheckLength=(type)=>{

      return this.state.ingredients[type] > 0 ? false:true;

     

    }

    TotalCostValidate=()=>{
      
     
        const total=Object.keys(this.state.ingredients).reduce((acc,el)=>{
        
        return acc+=this.state.ingredients[el]*this.INGREDIENTS_COST[el];

         
            
    },4)

      this.setState({totalCost:total});
      
  }

   OrderNowHandler=()=>{
     
      this.setState({isOrderNowCliked:!this.state.isOrderNowCliked})

   }

 
  
    

    render(){

    

        return(

               <Fragment>

                { this.state.isOrderNowCliked ? 

                <Backdrop click={this.OrderNowHandler} /> : null }
                  
                <Modal show={this.state.isOrderNowCliked}>

                  <OrderSummary Ingredients={this.state.ingredients} Total={this.state.totalCost} 
                  OrderBtnClicked={this.OrderNowHandler}/>

                </Modal>  
                  
                  

                 
                 <Burger ingredients={this.state.ingredients}/>

  
                 <BurgerControllers MoreClick={this.MoreClick} LessClick={this.LessClick}
                  CheckLength={this.CheckLength} TotalCost={this.state.totalCost}
                  OrderBtnClicked={this.OrderNowHandler}
              
                  />
              
               </Fragment>
        )
    }





}


export default BurgerBuilder;
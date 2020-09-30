import  React,{Fragment} from 'react';
import styles from './Layout.module.css';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';



const Layout=(props)=>(
    <Fragment>

     
        <div>Sidebar,Toolbar,Backdrop</div>
        <BurgerBuilder/>

  
    </Fragment>

);

export default Layout;
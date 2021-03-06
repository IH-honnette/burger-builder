import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/ToolBar/ToolBar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout =(props) =>(
    <Aux>
   {/* <div>Toolbar, SideBar, Backdrop</div> */}
   <Toolbar/>
   <SideDrawer />
   <main className={classes.Content}>
       {props.children}
   </main>
   </Aux>
);

export default layout;
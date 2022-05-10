import React, {Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/ToolBar/ToolBar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state ={
        showSideDrawer: true
    } 
    sideDrawerClosedHandler =() => {
         this.setState({showSideDrawer: false })
   }
   sideDrawerToggleHandler = () => {
       this.setState((prevState)=> {
            return {showSideDrawer:  !prevState.showSideDrawer}
       })
   }

    render () {
            return (
                <Aux>
                    {/* <div>Toolbar, SideBar, Backdrop</div> */}
                    <Toolbar drawerToggleClicked ={this.sideDrawerToggleHandler}/>
                    <SideDrawer closed ={this.sideDrawerClosedHandler} open ={this.state.showSideDrawer} />
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </Aux>
            )
    }
}

export default Layout;
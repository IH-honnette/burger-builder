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

    render () {
            return (
                <Aux>
                    {/* <div>Toolbar, SideBar, Backdrop</div> */}
                    <Toolbar/>
                    <SideDrawer closed ={this.sideDrawerClosedHandler} open ={this.state.showSideDrawer} />
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </Aux>
            )
    }
}

export default Layout;
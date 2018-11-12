import React,{Component} from 'react'

import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
        showSideDrawer:true
    }

    cancelSideDrawer = ()=>{
        this.setState({showSideDrawer:false});
    }
    SideDrawerToggleHandler = ()=>{
       
        this.setState((prev)=>{
            return{showSideDrawer:!prev.showSideDrawer};
        });
            
        
    }
        

    render(){
        return(
            <Aux>
                <Toolbar
                   toggleDrawerClicked={this.SideDrawerToggleHandler}
                />   
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.cancelSideDrawer}/>
                 
                <main className={classes.Content}>
                    { this.props.children }
                </main>
            </Aux>

        )
    }
    
} 

export default Layout;
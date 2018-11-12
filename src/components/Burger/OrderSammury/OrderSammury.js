import React,{Component} from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button';



class OrderSammury extends Component{
    render(){
        const ingredientSummary=Object.keys(this.props.ingredients)
        .map(igkey =>{
               return (<li key={igkey}>
                        <span style={{textTransform:'capitalize'}}>{igkey}</span> : {this.props.ingredients[igkey]}
                      </li>); 
        });

        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delecious burger with the following ingredients :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price : {this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btntype="Danger" clicked={this.props.cancel}>Cancel</Button>
            <Button btntype="Success" clicked={this.props.continue}>Continue</Button>

        </Aux>

        )
    }

} 

export default OrderSammury;
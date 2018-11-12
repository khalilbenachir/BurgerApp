import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSammury from '../../components/Burger/OrderSammury/OrderSammury'


const INGREDIENTS_PRICES ={
  salad:0.5,
  bacon:0.4,
  cheese:1.4,
  meat:1.5
}

class BurgerBuilder extends Component {


  state={
    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    totalprice :4,
    purchasable:false,
    purchasing:false

  }

  updatepurchasable(ingredients){
   

    const sum =Object.keys(ingredients).map(
      igkey => {
        return ingredients[igkey];
      }
    ).reduce((sum,el) => 
          {return sum+el},0);
    this.setState({purchasable:sum >0});
  }

  purchaseHandler=()=>{
    this.setState({purchasing:true});
  }

  purchaseCanselHandler=()=>{
    this.setState({purchasing:false});
  }
  purchaseContinueHandler=()=>{
    alert('you continue')
  }


  addIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    const updatecount = oldcount+1;
    const updatedIngredients = {
      ...this.state.ingredients
    }

    updatedIngredients[type] =updatecount;
    const priceadding = INGREDIENTS_PRICES[type];
    const newprice = this.state.totalprice + priceadding;
    this.setState({
      totalprice:newprice,
      ingredients:updatedIngredients
     });
    this.updatepurchasable(updatedIngredients);
  }
  removingIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    if(oldcount<=0) {return;}
    const updatecount = oldcount-1;
    
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatecount;
    const priceremoving = INGREDIENTS_PRICES[type];
    const newprice = this.state.totalprice - priceremoving;
    this.setState({
      totalprice:newprice,
      ingredients:updatedIngredients
      });

    this.updatepurchasable(updatedIngredients);


  }


  render() {

  const infoIngredient = {
    ...this.state.ingredients
  };
  for (let key in infoIngredient ) {
    infoIngredient[key]= infoIngredient[key] <= 0
    
  }



    return (
      <Aux>
        <Modal show={this.state.purchasing} modalclosed={this.purchaseCanselHandler} >
             <OrderSammury 
                  ingredients={this.state.ingredients}
                  price={this.state.totalprice.toFixed(2)}
                  cancel={this.purchaseCanselHandler}
                  continue={this.purchaseContinueHandler}/> 
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          addedIngredients={this.addIngredientHandler}
          removedIngredients={this.removingIngredientHandler}
          disabled = {infoIngredient}
          ordered={this.purchaseHandler}
          purchasable={this.state.purchasable}
          price = {this.state.totalprice}
        />
      </Aux>
    )
  }
}


export default BurgerBuilder;

import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'; 

const INGREDIENT_PRICES ={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {
    state ={
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice : 4.00,
            purchaseable: false,
            purchasing : false
    }
    updatePurchaseState(ingredients) {
      const sum =Object.keys(ingredients)
                    .map(igKey =>{
                        return ingredients[igKey];
                    })   
                    .reduce((sum, el) =>{
                        return sum + el;
                    }, 0); 
            this.setState({purchaseable: sum > 0});        
    }
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
 addIngredientHandler = (ingredientType) => {
    // what the ingredient count was
      const oldCount =this.state.ingredients[ingredientType];
      const updatedCount =oldCount + 1;
      const updatedIngredients ={
          ...this.state.ingredients// copy the old ingredients since we must update the state in a mutable way
      }
updatedIngredients[ingredientType] =updatedCount;
const priceAddition =INGREDIENT_PRICES[ingredientType];
const oldPrice =this.state.totalPrice;
const newPrice =oldPrice + priceAddition;
this.setState({
    totalPrice: newPrice,
     ingredients: updatedIngredients })
this.updatePurchaseState(updatedIngredients);     
 }

 removeIngredientHandler =(ingredientType) =>{
     const oldCount =this.state.ingredients[ingredientType];
      if(oldCount <= 0) return;

     const updatedCount =oldCount - 1;
     const updatedIngredients ={
         ...this.state.ingredients
     }
updatedIngredients[ingredientType] =updatedCount;
const priceDeduction =INGREDIENT_PRICES[ingredientType];
const oldPrice =this.state.totalPrice;
const newPrice =oldPrice - priceDeduction;
this.setState({
   totalPrice: newPrice,
    ingredients: updatedIngredients });
this.updatePurchaseState(updatedIngredients);    
 }

    render() {
        const disabledInfo ={
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
            //check what ingredient is zero so that it can be disabled
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        return(
                    <Aux>

                        <Modal 
                         show={this.state.purchasing}>
                            <OrderSummary ingredients ={
                                this.state.ingredients
                            }/>
                        </Modal>
                        <Burger
                        ingredients ={this.state.ingredients}
                        />
                        <BuildControls
                        ingredientAdded ={this.addIngredientHandler}
                        ingredientRemoved ={this.removeIngredientHandler}
                        disabled ={disabledInfo}
                        ordered ={this.purchaseHandler}
                        price={this.state.totalPrice}
                        purchasable ={this.state.purchaseable}
                        /> 

                    </Aux>
        );
    }

}

export default BurgerBuilder;